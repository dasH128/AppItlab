var Logueo = require('../models/Sesion');

	//ObjectId = require('mongoose').Types.ObjectId; 

//console.log("Logueo",Logueo);

module.exports = function(app) {

	var Logueo_Class 	= new Logueo(),
		Usuario 		= Logueo_Class.model;

	//console.log("Usuario",Usuario);

	//GET all

	//Get one
	this.findById = function (req,res) {
		/*Usuario.findById( req.params.usuario ,function (err, Sesion){
			if (!err) {
				//console.log('IF en SesionHandler: '+Sesion);
				res.send(Sesion);
			}else{
				console.log('ERROR en SesionHandler: '+err);
			}
		});*/

		var username = req.query.username,
			clave = req.query.clave;

		console.log("user",username);
		console.log("clave",clave);


		Usuario.findOne({ _id : username, clave : clave }, function (err, user) {
		  
		  if (err) return console.error(err);

		  //delete user.password;
		  console.log("user",user);

		  if(user){
		  	
	  		var user_res = {
	  			"_id" 		: 	user._id,

	  			nombres 	: 	user.nombres,
	  			apellidos 	: 	user.apellidos,
	  			apodo 		: 	user.apodo,
	  			rol 		: 	user.rol,
	  			estado 		: 	user.estado,

	  			nacimiento 	: 	user.nacimiento,
	  			horario 	: 	user.horario,
	  			horas 		: 	user.horas,
	  			deuda 		: 	user.deuda

	  		}

		  	res.send(user_res);

		  }else{
		  	res.send("null");
		  }

		  
		});
	}
	/*
	this.LoginUsuario= function(req,res){
		var username=req.body.username;
		var password = req.body.password;


		models.Usuario.findOne(	{$and:[{username:username},{password:password}]},
								{},
								function(err,data){
								if(!err && data)
								{
									res.send("ok");
								}else
								{
									res.send("err");
								}
		});
	}
	*/

	//


/*	//POST
	var addUsuario = function(req,res){


	}
	///
*/


}

