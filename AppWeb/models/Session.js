module.exports = function(){

	this.isInSession = function(req, idUsuario){
		"use strict";

		if (!req.session) return false;

		if(req.session.usuario["_id"] == idUsuario){
			return true;
		}

		return false;
		
	}

	this.putInSession = function(req, obj){
		"use strict";
		req.session.usuario = obj;

		return true;
	}
	
}

