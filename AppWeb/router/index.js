var SesionHandler = require('../controllers/SesionHandler');

module.exports = function (app,con){


	console.log("Index");

	var sesionHandler = new SesionHandler(app);

	// RUTAS
	app.get('/login',sesionHandler.findById);
	//app.post('/usuario/:usuario',sesionHandler.findById);
	//

	//Muestra Hellow World
	app.get('/',function (req, res){
		res.send('hello world');
	});
	//



}