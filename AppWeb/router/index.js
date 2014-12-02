var UserHandler 	= require('../controllers/UserHandler'),
	ContentHandler 	= require('../controllers/ContentHandler'),
	AdminHandler 	= require('../controllers/AdminHandler');

module.exports = function (app,con){


	//console.log("Index");

	var userHandler = new UserHandler(app),
		contentHandler = new ContentHandler(),
		adminHandler = new AdminHandler(app);

	// RUTAS

	//API
	app.get('/api/login', userHandler.APIhandleLogin);



	//WebAPP
	app.get('/login', contentHandler.handleLoginPage);
	app.post('/login', userHandler.handleLogin);

	app.get('/session/end', userHandler.handleLogout)

	app.get('/chancho', contentHandler.handleChanchoPage);

	//Muestra Hellow World
	app.get('/', contentHandler.handleMainPage);




}