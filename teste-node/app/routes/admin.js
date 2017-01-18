module.exports = function(application){	

	application.get('/formulario_inclusao_noticia', function (req,res){
		res.render("admin/form_add_noticia");
	});

	application.post('/noticias/salvar', function (req,res){
		var noticias = req.body;
		

		req.assert('titulo','obrigatorio').notEmpty();
		req.assert('resumo','obrigatorio').notEmpty();
		req.assert('titulo','tamanha entre 10 e 100 caracteres').len(10,100);
		req.assert('autor','obrigatorio').notEmpty();
		req.assert('data_noticia','obrigatorio').notEmpty().isDate();
		req.assert('noticias','obrigatorio').notEmpty();

		var error =req.validationErrors();
		if(error){
			res.render("admin/form_add_noticia");
			return;
		}

		var connection = application.config.dbConnection();
		var noticiasDAO = new application.app.models.NoticiasDAO(connection);

		noticiasDAO.salvarNoticia(noticias, function(err, result){	
	        if (err) {
	            console.log("ERROR : ",err);          
	        } else {            
	            res.redirect('/noticias');
	            console.log("result from db is : ",result);   
	        }  
		});
	});

}