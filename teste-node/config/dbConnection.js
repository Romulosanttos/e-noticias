var mysql =require("mysql");

module.exports = function(){	
	return  mysql.createConnection({ //coneção com banco sql
		host : 'localhost',
		user : 'root',
		password : 'qwer!123',
		database : 'portal_noticias'
	});
}