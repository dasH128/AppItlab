var 
	body_parser		= require('body-parser'),
	express 		= require('express'),
	mongoose		= require('mongoose'),
	socket_io		= require('socket.io'),
	path 			= require('path'),
	swig			= require('swig'),
	cookie_parser 	= require('cookie-parser'),
	router			= require('./router'),
	cons 			= require('consolidate'),
	express_session = require('express-session'),
	//models		= require('./models/Sesion')(app,mongoose),
	app				= express();
	
	
	//require('./config')(app, express, express_session, cookie_parser, path, swig, cons, body_parser);
	
	//mongoose.connect('mongodb://localhost/usuarios', function (err,con){
	//mongoose.connect('mongodb://192.168.49.101/AppItlab', function (err,con){
		//if(err){
			//console.log('ErrOR: Conectando DB: '+err);
		//}else{
			//console.log('Conexión a la DB realizada');
			
			router(app);
			app.listen(80);
			console.log('Servidor Express escuchando el puerto: 80');


		//}
	//});
	
	
	

