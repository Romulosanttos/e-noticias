var mysql =require("mysql");

var connMySQL = function(){
	 	console.log("conexão esabelecida com database");
		return  mysql.createConnection({ //conexão com banco sql
		host : 'localhost',
		user : 'root',
		password : 'qwer!123',
		database : 'portal_noticias'
	});
}
module.exports = function(){	
	console.log("O autoload carregou o modulo");
	return connMySQL;
}