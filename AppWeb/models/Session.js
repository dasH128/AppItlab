module.exports = function(){

	this.isInSession = function(req, idUsuario){
		"use strict";

		if (!req.session) return false;

		if(req.session["_id"] == idUsuario){
			return true;
		}

		return false;
		
	}

	this.putInSession = function(req, obj){
		"use strict";
		req.session = obj;

		return true;
	}
	
}

