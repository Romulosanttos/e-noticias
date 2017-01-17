module.exports = function(app){	

	app.get('/noticias', function (req,res){

		var mysql =require("mysql");

		var connection = mysql.createConnection({ //coneção com banco sql
			host : 'localhost',
			user : 'root',
			password : 'qwer!123',
			database : 'portal_noticias'
		});

		connection.query( 'select * from noticias' , function(error, result){
			res.render("noticias/noticias", {noticias :result});
		});
		//res.render("noticias/noticias");
	});
};
