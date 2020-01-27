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
var sex;

var Age = function(num,sex){
	if(sex == male){
		switch (num) {
		    case (20<=num && num<35):
		        return -9
		    case (35<=num && num<40):
		        return -4
		    case (40<=num && num<45):
		        return 0
		    case (45<=num && num<50):
		        return 3
		    case (50<=num && num<55):
		        return 6
		    case (55<=num && num<60):
		        return 8
		    case (60<=num && num<65):
		        return 10
		    case (65<=num && num<70):
		        return 11
		    case (70<=num && num<74):
		        return 12
		    case (num>=75):
		        return 13   
    	}
   	}
    else if(sex == female){
    	switch (num) {
		    case (20<=num && num<35):
		        return -7
		    case (35<=num && num<40):
		        return -3
		    case (40<=num && num<45):
		        return 0
		    case (45<=num && num<50):
		        return 3
		    case (50<=num && num<55):
		        return 6
		    case (55<=num && num<60):
		        return 8
		    case (60<=num && num<65):
		        return 10
		    case (65<=num && num<70):
		        return 12
		    case (70<=num && num<74):
		        return 14
		    case (num>=75):
		        return 16 
    	}
	}
}

var Currentsmoke = function(status,sex,num){
	if(status == y){
		return 0;
	}
	else{
		if(sex == male){
			switch (num) {
			    case (20<=num && num<40):
			        return 8
			    case (40<=num && num<50):
			        return 5
			    case (50<=num && num<60):
			        return 3
			    case (60<=num && num<70):
			        return 1
			    case (num>=70):
			        return 1 
	    	}
	   	}
	   	else if(sex == female){
	    	switch (num) {
			    case (20<=num && num<40):
			        return 9
			    case (40<=num && num<50):
			        return 7
			    case (50<=num && num<60):
			        return 4
			    case (60<=num && num<70):
			        return 2
			    case (num>=70):
			        return 1 
	    	}
		}
	}
}//抽菸

var TotalCholesterol = function(sex,num,mg){
	if(sex == female){
			switch (num) {
			    case (20<=num && num<40):
			        switch(mg){
			        	case (mg<=160):
			        		return 0;
			        	case (160<mg&&mg<=199):
			        		return 4;
			        	case (200<=mg&&mg<=239):
			        		return 8;
			        	case (240<=mg&&mg<=279):
			        		return 11;
			        	case (mg>=280):
			        		return 13;
			        }
			    case (40<=num && num<50):
			        switch(mg){
			        	case (mg<=160):
			        		return 0;
			        	case (160<mg&&mg<=199):
			        		return 3;
			        	case (200<=mg&&mg<=239):
			        		return 6;
			        	case (240<=mg&&mg<=279):
			        		return 8;
			        	case (mg>=280):
			        		return 10;
			        }
			    case (50<=num && num<60):
			        switch(mg){
			        	case (mg<=160):
			        		return 0;
			        	case (160<mg&&mg<=199):
			        		return 2;
			        	case (200<=mg&&mg<=239):
			        		return 4;
			        	case (240<=mg&&mg<=279):
			        		return 5;
			        	case (mg>=280):
			        		return 7;
			        }
			    case (60<=num && num<70):
			        switch(mg){
			        	case (mg<=160):
			        		return 0;
			        	case (160<mg&&mg<=199):
			        		return 1;
			        	case (200<=mg&&mg<=239):
			        		return 2;
			        	case (240<=mg&&mg<=279):
			        		return 3;
			        	case (mg>=280):
			        		return 4;
			        }
			    case (num>=70):
			        switch(mg){
			        	case (mg<=160):
			        		return 0;
			        	case (160<mg&&mg<=199):
			        		return 1;
			        	case (200<=mg&&mg<=239):
			        		return 1;
			        	case (240<=mg&&mg<=279):
			        		return 2;
			        	case (mg>=280):
			        		return 2;
			        } 
	    	}
	   	}
	   	else if(sex == male){
	    	switch (num) {
			    case (20<=num && num<40):
			        switch(mg){
			        	case (mg<=160):
			        		return 0;
			        	case (160<mg&&mg<=199):
			        		return 4;
			        	case (200<=mg&&mg<=239):
			        		return 7;
			        	case (240<=mg&&mg<=279):
			        		return 9;
			        	case (mg>=280):
			        		return 11;
			        }
			    case (40<=num && num<50):
			        switch(mg){
			        	case (mg<=160):
			        		return 0;
			        	case (160<mg&&mg<=199):
			        		return 3;
			        	case (200<=mg&&mg<=239):
			        		return 5;
			        	case (240<=mg&&mg<=279):
			        		return 6;
			        	case (mg>=280):
			        		return 8;
			        }
			    case (50<=num && num<60):
			        switch(mg){
			        	case (mg<=160):
			        		return 0;
			        	case (160<mg&&mg<=199):
			        		return 2;
			        	case (200<=mg&&mg<=239):
			        		return 3;
			        	case (240<=mg&&mg<=279):
			        		return 4;
			        	case (mg>=280):
			        		return 5;
			        }
			    case (60<=num && num<70):
			        switch(mg){
			        	case (mg<=160):
			        		return 0;
			        	case (160<mg&&mg<=199):
			        		return 1;
			        	case (200<=mg&&mg<=239):
			        		return 1;
			        	case (240<=mg&&mg<=279):
			        		return 2;
			        	case (mg>=280):
			        		return 3;
			        }
			    case (num>=70):
			        switch(mg){
			        	case (mg<=160):
			        		return 0;
			        	case (160<mg&&mg<=199):
			        		return 0;
			        	case (200<=mg&&mg<=239):
			        		return 0;
			        	case (240<=mg&&mg<=279):
			        		return 1;
			        	case (mg>=280):
			        		return 1;
			        }
	    	}
		}
}

var HDLcholesterol = function(sex,num){	
	switch(num){
		case(num>=60):
			return -1;
		case(50<=num&&num<=59):
			return 0;
		case(40<num&&num<=49):
			return 1;
		case(num<=40):
			return 2;
	}
}

var SBPuntreat = function(sex,num){
	if(sex == male){
		switch(num){
			case(num<120):
				return 0;
			case(120<=num&&num<129):
				return 0;
			case(130<=num&&num<139):
				return 1;
			case(140<=num&&num<159):
				return 1;
			case(num>=160):
				return 2;
		}
	}
	else if(sex == female){
		switch(num){
			case(num<120):
				return 0;
			case(120<=num&&num<129):
				return 1;
			case(130<=num&&num<139):
				return 2;
			case(140<=num&&num<159):
				return 3;
			case(num>=160):
				return 4;
		}
	}
}

var SBPuntreat = function(sex,num){
	if(sex == male){
		switch(num){
			case(num<120):
				return 0;
			case(120<=num&&num<129):
				return 1;
			case(130<=num&&num<139):
				return 2;
			case(140<=num&&num<159):
				return 2;
			case(num>=160):
				return 3;
		}
	}
	else if(sex == female){
		switch(num){
			case(num<120):
				return 0;
			case(120<=num&&num<129):
				return 3;
			case(130<=num&&num<139):
				return 4;
			case(140<=num&&num<159):
				return 5;
			case(num>=160):
				return 6;
		}
	}
}


var Total = function(sex,treat){
	if(sex = male){
		if(treat==T){
			result = Age()+Currentsmoke()+TotalCholesterol()+HDLcholesterol()+SBPuntreat();
		}
		else {
			result = Age()+Currentsmoke()+TotalCholesterol()+HDLcholesterol()+SBPuntreat();
		}
		switch(result){
			case 0:
				console.log("<1%");
				break;
			case(1<=result&&result<=4):
				console.log("1%");
				break;
			case(5<=result&&result<=6):
				console.log("2%");
				break;
			case(result==7):
				console.log("3%");
				break;
			case(result==8):
				console.log("4%");
				break;
			case(result==9):
				console.log("5%");
				break;
			case(result==10):
				console.log("6%");
				break;
			case(result==11):
				console.log("8%");
				break;
			case(result==12):
				console.log("10%");
				break;
			case(result==13):
				console.log("12%");
				break;
			case(result==14):
				console.log("16%");
				break;
			case(result==15):
				console.log("20%");
				break;
			case(result==16):
				console.log("25%");
				break;
			case(result>=17):
				console.log(">30%");
				break;
		}
	}
	else if(sex == female){
		if(treat=T)
			result = Age()+Currentsmoke()+TotalCholesterol()+HDLcholesterol()+SBPuntreat();
		else if(treat=F)
			result = Age()+Currentsmoke()+TotalCholesterol()+HDLcholesterol()+SBPuntreat();
		switch(result){
			case (result<9):
				console.log("<1%");
				break;
			case(9<=result&&result<=12):
				console.log("1%");
				break;
			case(13<=result&&result<=14):
				console.log("2%");
				break;
			case(result==15):
				console.log("3%");
				break;
			case(result==16):
				console.log("4%");
				break;
			case(result==17):
				console.log("5%");
				break;
			case(result==18):
				console.log("6%");
				break;
			case(result==19):
				console.log("8%");
				break;
			case(result==20):
				console.log("11%");
				break;
			case(result==21):
				console.log("14%");
				break;
			case(result==22):
				console.log("17%");
				break;
			case(result==23):
				console.log("22%");
				break;
			case(result==24):
				console.log("27%");
				break;
			case(result>=25):
				console.log(">30%");
				break;
		}

	}
}
