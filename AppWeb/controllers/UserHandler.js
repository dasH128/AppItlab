var Logueo = require('../models/User'),
	Session = require('../models/Session');

	//ObjectId = require('mongoose').Types.ObjectId; 

//console.log("Logueo",Logueo);

module.exports = function(app) {

	var Logueo_Class 	= new Logueo(),
		Usuario 		= Logueo_Class.model,

		session 		= new Session();

	var login = function (req, json, callback_yes, callback_no){

		Usuario.findOne(json, function (err, user){
			if (err) return console.error(err);

			//delete user.password;
			//console.log("user",user);

			if(user){
				
				var user_res = {
					"_id" 		: 	user._id,

					nombres 	: 	user.nombres,
					apellidos 	: 	user.apellidos,
					apodo 		: 	user.apodo,
					admin 		: 	user.admin,
					estado 		: 	user.estado,

					nacimiento 	: 	user.nacimiento,
					horario 	: 	user.horario,
					horas 		: 	user.horas,
					deuda 		: 	user.deuda

				}

				if (callback_yes) callback_yes(user_res);

				return user_res;

			}else{

				if (callback_no) callback_no();

				return null;
			}
		})
	}
	//console.log("Usuario",Usuario);

	//GET all

	//Get one
	this.APIhandleLogin = function (req, res) {
 		

		var username = req.query.username,
			clave = req.query.clave;

		var user = login(req, { _id : username, clave : clave }, function (user){
			res.send(user);
		},function(){
			res.send(null);
		});


	}

	this.handleLogin = function (req, res){
		var username = req.body.username,
			clave = req.body.clave;

		//console.log({ _id : username, clave : clave })

		var user = login(req, { _id : username, clave : clave }, function (user){
			console.log("user", user)
			if(!user.estado){
				res.render('login', {error: "Esta cuenta está deshabilitada"});
			}else if(user.admin){
				session.putInSession(req, user);
				res.redirect('/');
			}else{
				res.render('login', {error: "Esta cuenta no tiene permisos de administrador"});
			}
			
		},function(){
			res.render('login', {error: "El usuario o contraseña son incorrectos"});
		});

	}

	this.handleLogout = function (req, res){
		session.endSession(req);
		res.redirect('/');
	}


}

