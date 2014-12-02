module.exports = function(){

	var collection 	= 'Chancho',
		mongoose 	= require('mongoose'),
		Schema		= mongoose.Schema;



	var chancho = new Schema({
		"_id" 		: 	String,
	  	valor 		: 	Number
	});

	this.model = mongoose.model( collection , chancho );

	return this;

}
