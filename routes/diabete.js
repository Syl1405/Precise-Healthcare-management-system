const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
var mysql = require('mysql');

var dbconfig = require('../database/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

const User = require("../models/User")
users.use(cors())

var arrays = new Array();
var size_user = 0;
var user = new Array(); 
var query;
var id;

var Age = function(number){
	if(number<=34)
		return 0;
	else if(number>34 && number<=44)
		return 2;
	else if(number>44 && number<=54)
		return 4;
	else if(number>54 && number<=64)
		return 6;
	else if(number>=65)
		return 8;
}

var Bmi =function(height,weight){
	h = height/100;
	result = weight/(h*h);
	if(result<25)
		return 0;
	else if(result>25 && result<29.9)
		return 3;
	else if(result>30 && result<34.9)
		return 6;
	else if(result>35.9)
		return 8;
}

var Currentsmoke = function(status){
	if(status="T")
		return 2;
	else
		return 0;
}//抽菸

var Ethnicity = function(){
	return 2;//用戶皆為亞洲人
}//人種

var Phdiabetes = function(status){
	if(status="T")
		return 2;
	else
		return 0;
}//父母糖尿病史

var Hbg = function(status){
	if(status="T")
		return 6;
	else
		return 0;
}//高血糖病史

var MedicationsUse = function(status){
	if(status="T")
		return 2;
	else
		return 0;
}//是否有用antihypertensive medications

var Physical = function(status){
	if(status="T")
		return 2;
	else
		return 0;
}//是否缺乏運動

var Total = function(){
	result = Age()+Bmi()+Currentsmoke()+Ethnicity()+Phdiabetes()+Hbg()+MedicationsUse()+Physical();
	if(result<=5)
		return 1/100;
	else if(result>=6 && result<= 8)
		return 1/50;
	else if(result>=9 && result<= 11)
		return 1/30;
	else if(result>=12 && result<= 15)
		return 1/14;
	else if(result>=16 && result<= 19)
		return 1/7;
	else if(result>=20)
		return 1/3;
}
