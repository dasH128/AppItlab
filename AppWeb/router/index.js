var UserHandler = require('../controllers/UserHandler'),
	ContentHandler = require('../controllers/ContentHandler');

module.exports = function (app,con){


	//console.log("Index");

	var userHandler = new UserHandler(app),
		contentHandler = new ContentHandler();

	// RUTAS

	//API
	app.get('/api/login', userHandler.APIhandleLogin);



	//WebAPP
	app.get('/login', contentHandler.handleLoginPage);
	app.post('/login', userHandler.handleLogin);

	app.get('/session/end', userHandler.handleLogout)

	//Muestra Hellow World
	app.get('/', contentHandler.handleMainPage);




}