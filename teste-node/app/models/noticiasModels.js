module.exports = function(app){

	this.getNoticias = function (connection, callback){
		connection.query( 'select * from noticias', callback);
	}

	this.getNoticia = function (connection, callback){
		connection.query( 'select * from noticias where id_noticias', callback);
	}

	return this;
}