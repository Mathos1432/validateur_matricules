var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Etudiant = mongoose.model('Etudiant');


/* GET home page. */
router.get('/', function(req, res, next) {
	Etudiant.find({present:true}, function(err, results){
		if(err){
			res.render('index', { title: 'Validateur de matricules', matricules:[] });
		} else {
			res.render('index', { title: 'Validateur de matricules', matricules:results});
		}
	});
});

router.get('/submit-matricule', function(req, res, next) {
	Etudiant.findOne({"matricule":req.query.matricule}, function(err, data){
		console.log(data);
		if(err) {
			return res.send({matricule:req.query.matricule, success:false, msg:"Tremblay sait pas coder"});
		}  

		if(data.present == "true"){
			res.send({matricule:req.query.matricule, success:false, msg:"Déjà utilisé"});
		}
		else {
			data.present = true;
			data.save();
			res.send({matricule:req.query.matricule, success:true});
		}
	});
});

module.exports = router;
