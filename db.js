var mongoose = require('mongoose');
var options = require('./connection')
var etudiantSchema = mongoose.Schema({
	matricule: Number,
	programme:String,
	present: String
});

var Etudiant = mongoose.model('Etudiant', etudiantSchema);
mongoose.connect("mongodb://ds050189.mlab.com:050189/matricules_cegl_ceginfo", options)
