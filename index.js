var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app=express();

const port = 3000;

const route = require('./routes/route.js');

mongoose.connect("mongodb://localhost:27017/PersonalWebsite");


// mongoose.connect("mongodb://rohan:rmk12345@cluster0-shard-00-00-dxviu.mongodb.net:27017,cluster0-shard-00-01-dxviu.mongodb.net:27017,cluster0-shard-00-02-dxviu.mongodb.net:27017/PersonalDetails?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
mongoose.connection.on('connected',()=>{
	console.log('Connection succesfull');
});
mongoose.connection.on('error',(err)=>{
	if(err){
		console.log('error:'+err);	
	}
	
});

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/',route);


 app.listen(port,()=>{
 	console.log('Server started at '+port);
 });