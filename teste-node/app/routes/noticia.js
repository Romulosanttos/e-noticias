module.exports = function(app){	

	app.get('/noticia', function (req,res){

		var connection = app.config.dbConnection();

		connection.query( 'select * from noticias where id_noticias' , function(error, result){
			res.render("noticias/noticia", {noticia :result});
		});
	});
};
