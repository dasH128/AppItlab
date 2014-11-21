var UserHandler = require('../controllers/UserHandler');

module.exports = function (app,con){


	//console.log("Index");

	var userHandler = new UserHandler(app);

	// RUTAS
	app.get('/login',userHandler.login);
	//app.post('/usuario/:usuario',sesionHandler.findById);
	//

	//Muestra Hellow World
	app.get('/', function (req, res){
		console.log("Hello world!");
		res.send("hellow world");
	});
	//



}