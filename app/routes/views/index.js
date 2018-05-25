var keystone = require('keystone');
var express = require('express')
var router = express.Router();

// Views
var area_aluno = require('./area_aluno');
var area_docente = require('./area_docente');
// var area_visitante = require('./area_visitante');

router.get('/', function (req, res){
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Render the view
	view.render('index');
});

router.use('/area/aluno', area_aluno);
router.use('/area/docente', area_docente);
// router.use('/area/visitante', area_visitante);

module.exports = router
