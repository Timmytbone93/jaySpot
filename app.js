var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var fs = require('fs');
var cors = require('cors');
var mongoose = require('mongoose');

//Init App
var app = express();


var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

app.use(cors(corsOption));
//ssl
/*var options = {
   key  : fs.readFileSync('CoEKey'),
   cert : fs.readFileSync('CoECert'),
   passphrase: 'CoEnter11'
};*/

mongoose.connect('mongodb://localhost:27017/jayspot',{useNewUrlParser: true });

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));


app.use('/api',require('./routes/index'));


/*app.use(express.static(path.join(__dirname,'/client/build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});*/


var server = http.createServer(app);
//var secureServer = https.createServer(options,app);

//secureServer.listen(443);
server.listen(3001);
//server.listen(80);