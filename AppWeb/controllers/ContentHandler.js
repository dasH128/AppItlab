var Session = require('../models/Session');


module.exports = function(app) {

	var session = new Session();

	this.handleMainPage = function (req, res){

		var user_ses = session.getSession(req);

		console.log("Main Page");

		if(user_ses){
			console.log("user", user_ses);
			res.render('index', user_ses);
		}else{
			res.redirect('login');
		}

	}

	this.handleLoginPage = function (req, res){
		if(session.isInSession(req)){
			res.redirect('/');
		}else{
			res.render('login',{});
		}
	}

	this.handleChanchoPage = function (req, res){
		res.render('reports',{});
	}
}