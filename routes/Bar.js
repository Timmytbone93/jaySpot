var express = require('express');
var config  = require('../Config/config');

var User = require('../models/User');
var Bar = require('../models/Bar');

var router = express.Router();


router.post('/Add',async (req,res,next) => {
    const newBar = new Bar({
        barName:req.body.barName,
        barOwnerID: req.body.barOwnerID,
        barPhone:req.body.barPhone,
        street:req.body.street,
        city:req.body.city,
        zipCode:req.body.zipCode,
        about:req.body.about
    });
    try {
        let bar = await newBar.save();
        await User.update({_id:req.body.barOwnerID},{
            bar:bar._id
        },function(err,response){
            console.log(response);
            console.log(bar);
            res.status(201).send({response:"Bar Created for user " + req.body.BarOwnerID});
        });

    }catch(err){
        console.log(err);
    }
});


module.exports = router;