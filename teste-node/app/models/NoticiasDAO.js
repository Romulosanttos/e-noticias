function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function ( callback){
		this._connection.query( 'select * from noticias', callback);
	}

NoticiasDAO.prototype.getNoticia = function ( callback){
		this._connection.query( 'select * from noticias where id_noticias', callback);
	}

NoticiasDAO.prototype.salvarNoticia =  function (noticias,  callback){
		this._connection.query( 'insert into noticias set ?', noticias, callback);
	}


 module.exports = function(){
	return NoticiasDAO;
}