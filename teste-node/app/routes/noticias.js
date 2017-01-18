module.exports = function(application){	

	application.get('/noticias', function (req,res){

		var connection = application.config.dbConnection();
		var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

		NoticiasDAO.getNoticias(function(err, result){
        if (err) {

            console.log("ERROR : ",err);            
        } else {            
            res.render("noticias/noticias", {noticias :result});
            console.log("result from db is : ",result);   
        } 
			
		});
	});
};
