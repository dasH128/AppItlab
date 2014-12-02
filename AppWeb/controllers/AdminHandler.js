var Admin_cons = require('../models/Admin');

module.exports = function(app) {

	var Admin_Class = new Admin(),
		Admin 		= Admin_Class.model;

	this.APIhandleFind = function (req,res){
		Admin.findOne({}, function (err, chancho){
			if (err) return console.error(err);

			res.send(chancho);
		
		})
	}

	this.handleFind = function (req,res){
		Admin.findOne({}, function (err, chancho){
			if (err) return console.error(err);

			res.render('chancho',chancho);
		
		})
	}

	this.APIhandleUpdate = function (req, res){
		var new_val = req.query.value;

		Admin.update({}, {value : new_val}, {}, function (err, doc){
			console.log("Todo bien", doc);

			res.send(true);
		});
	}

	this.handleUpdate = function (req, res){
		var new_val = req.body.value;

		Admin.update({}, {value : new_val}, {}, function (err, chancho){
			console.log("Todo bien", chancho);
			chancho.menssage = "Se ha acutalizado correctamente el chancho";
			res.render('chancho',chancho);
		});
	}


}