var mongoose = require('mongoose');
var options = require('./connection');

var etudiantSchema = mongoose.Schema({
	matricule: String,
	present: Boolean
});

var Etudiant = mongoose.model('Etudiant', etudiantSchema);
mongoose.connect("mongodb://ds050189.mlab.com:50189/matricules_cegl_ceginfo", options)
