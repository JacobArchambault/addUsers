/*   utility program to create db and add some documents   */
var express = require('express');
var app = express();

var User = require('./modules/User.js');

app.get('/',  function(req,  res) {   
   /* data should be in JSON format */
   var allUsers = [
	  {"username": "asmith", "password": "12345", "first_name": "Ann", "last_name": "Smith",  "city": "Chicago", "dob": "2001-05-15", "preference": "Vanilla", "violations": 3},
	  {"username": "mbrown", "password": "56789", "first_name": "Mac", "last_name": "Brown",  "city": "Boise", "dob": "2000-08-04", "preference": "Vanilla", "violations": 4},
	  {"username": "rjones", "password": "pword", "first_name": "Roz", "last_name": "Jones",  "city": "Bangor", "dob": "1997-08-28", "preference": "Vanilla", "violations": 9},
	  {"username": "gdavis", "password": "earth", "first_name": "Gia", "last_name": "Davis",  "city": "Detroit", "dob": "1976-12-15", "preference": "Vanilla", "violations": 7},
	  {"username": "tgreen", "password": "green", "first_name": "Tod", "last_name": "Green",  "city": "Chicago", "dob": "1988-10-23", "preference": "Vanilla", "violations": 24},
	  {"username": "ztomas", "password": "asdfg", "first_name": "Zoe", "last_name": "Tomas",  "city": "Chicago", "dob": "1990-05-09", "preference": "Vanilla", "violations": 8},
	  {"username": "aoneal", "password": "zxcvb", "first_name": "Abe", "last_name": "Oneal",  "city": "Bangor", "dob": "1981-08-04", "preference": "Vanilla", "violations": 1},
	  {"username": "rweiss", "password": "qwert", "first_name": "Ray", "last_name": "Weiss",  "city": "Bangor", "dob": "1977-02-03", "preference": "Vanilla", "violations": 0},
	  {"username": "asmyth", "password": "23456", "first_name": "Art", "last_name": "Smyth",  "city": "Chicago", "dob": "2001-06-05", "preference": "Vanilla", "violations": 3},
	  {"username": "byoung", "password": "22222", "first_name": "Ben", "last_name": "Young",  "city": "Detroit", "dob": "2004-02-04", "preference": "Vanilla", "violations": 7},
	  {"username": "dadams", "password": "fword", "first_name": "Dan", "last_name": "Adams",  "city": "Bangor", "dob": "1992-06-08", "preference": "Vanilla", "violations": 4},
	  {"username": "fbaker", "password": "baker", "first_name": "Fay", "last_name": "Baker",  "city": "Detroit", "dob": "1979-12-11", "preference": "Vanilla", "violations": 17},
	  {"username": "jgreen", "password": "77777", "first_name": "Jan", "last_name": "Green",  "city": "Bangor", "dob": "1978-11-23", "preference": "Vanilla", "violations": 4},
	  {"username": "jwhite", "password": "admin", "first_name": "Jed", "last_name": "White",  "city": "Chicago", "dob": "1992-08-09", "preference": "Vanilla", "violations": 8},
	  {"username": "klewis", "password": "rrttb", "first_name": "Kay", "last_name": "Lewis",  "city": "Bangor", "dob": "1985-03-04", "preference": "Vanilla", "violations": 0},
	  {"username": "smills", "password": "qwert", "first_name": "Sue", "last_name": "Mills",  "city": "Bangor", "dob": "1974-02-09", "preference": "Vanilla", "violations": 0}
   ]

	

     User.insertMany(allUsers,  function (err,  docs) {
        if (err){ 
            res.send('Error: '  + err);
        } 
		else {
			User.count({}, function( err, count){
			  console.log('-');
              console.log( "Users added :", count );
			  res.send('success');
           })			  
        }
    });
});

app.listen(3000,   function() {
	console.log('Listening on port 3000,  ctrl-c to quit');
});
