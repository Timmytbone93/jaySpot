var express = require('express');
var {google} = require('googleapis');
var plus = google.plus('v1');
var config = require('../Config/config');
var User = require('../models/User');
var {generateToken, sendToken, verifyToken} = require('../middleware/token');


var router = express.Router();


const oauth2Client = new google.auth.OAuth2(
    config.googleApi.client_id,
    config.googleApi.client_secret,
    config.googleApi.redirect_uri
);

oauth2Client.on('tokens', (tokens) => {
    User.update({
        id_token: tokens.id_token,
        googleProvider: tokens
    });
});


router.post('/auth/google', function (req, res, next) {
    getTokens(req.body.code).then(response => {
        oauth2Client.setCredentials(response.tokens);
        plus.people.get({
            userId: 'me',
            auth: oauth2Client
        }, function (err, user) {
            profile = {
                google_id: user.data.id,
                fullName: user.data.displayName,
                firstName: user.data.name.givenName,
                lastName: user.data.name.familyName,
                email: user.data.emails[0].value,
                googleProvider: response.tokens
            };

            User.upsertGoogleUser(profile, function (err, user) {
                if (!err) {
                    req.auth = user;
                    next();
                } else {
                    res.status(500).send("Something Went Wrong! uh oh!");
                }

            });

        });

    });

}, generateToken, sendToken);

async function getTokens(AuthorizationCode) {
    try {
        return await oauth2Client.getToken(AuthorizationCode);
    } catch (e) {
        console.log(e);
    }
}


router.post('/isAuthenticated', function (req, res) {
    if (!req.body.token) {
        return res.status(401).send('User not Authenticated!');
    }
    req.token = req.body.token;
    res.setHeader('x-auth-token', req.token);
    verifyToken(req, res);
});



module.exports = router;
