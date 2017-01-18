function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
		this._connection.query( 'select * from noticias', callback);
	}

NoticiasDAO.prototype.getNoticia = function(callback){
		this._connection.query( 'select * from noticias where id_noticias ', callback);
	}

NoticiasDAO.prototype.salvarNoticia =  function(noticia,  callback){
		// console.log(noticia);
		this._connection.query('insert into noticias set ? ', noticia, function(err, result){
        if (err) 
            callback(err,null);
        else
            callback(null,result);
		});
	}


 module.exports = function(){
	return NoticiasDAO;
}