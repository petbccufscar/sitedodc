var keystone = require('keystone');
var express = require('express');
var router = express.Router();

router.get('/aluno', function (req, res) {
	var view = new keystone.View(req, res);

	// locals.section is used to set the currently selected
	// item in the header navigation.
	res.locals.section = 'Área do Aluno';

	// Render the view
	view.render('area_aluno');
});

router.get('/docente', function (req, res) {
	var view = new keystone.View(req, res);

	// locals.section is used to set the currently selected
	// item in the header navigation.
	res.locals.section = 'Área do Docente';

	// Render the view
	view.render('area_docente');
});

router.get('/visitante', function (req, res) {
	var view = new keystone.View(req, res);

	// locals.section is used to set the currently selected
	// item in the header navigation.
	res.locals.section = 'Área do Visitante';

	// Render the view
	view.render('area_visitante');
});

module.exports = router;
