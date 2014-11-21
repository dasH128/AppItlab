module.exports = function(){

	var collection 	= 'usuarios',
		mongoose 	= require('mongoose'),
		Schema		= mongoose.Schema;

	var sesion = new Schema({
			"_id" 		: 	String,

  			nombres 	: 	String,
  			apellidos 	: 	String,
  			apodo 		: 	String,
  			rol 		: 	Boolean,
  			estado 		: 	Boolean,

  			nacimiento 	: 	Date,
  			horario 	: 	{
	  							lunes:[HORARIO],
	  							martes:[HORARIO],
	  							miercoles:[HORARIO],
	  							jueves:[HORARIO],
	  							viernes:[HORARIO],
	  							sabado:[HORARIO]
				  			},
  			horas 		: 	Number,
  			deuda 		: 	Number

		});

	var HORARIO = new Schema({
 		de     	: Number,
		a    	: Number	
	});

	this.model = mongoose.model( collection , sesion );

	/*mongoose.set('debug', function (collectionName, method, query, doc, options) {
	  console.log("--------------------------------------------");

	  console.log("collectionName",collectionName);
	  console.log("method",method);
	  console.log("query",query);
	  console.log("doc",doc);
	  console.log("options",options);

	  console.log("--------------------------------------------");
	});*/
	
	return this;
}

