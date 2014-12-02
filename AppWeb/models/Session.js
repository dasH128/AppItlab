module.exports = function(){

	this.isInSession = function (req){
		"use strict";

		//console.log("req.session",req.session);

		if (!req.session.usuario) return false;

		if(req.session.usuario["_id"]){
			return true;
		}

		return false;
		
	}

	this.getSession = function (req){

		if (!req.session.usuario) return null

		return req.session.usuario
	}

	this.endSession = function (req){
		req.session.usuario = null;
		req.session.destroy();
	}

	this.putInSession = function (req, obj){
		"use strict";
		req.session.usuario = obj;

		console.log("put in session");

		return true;
	}
	
}

