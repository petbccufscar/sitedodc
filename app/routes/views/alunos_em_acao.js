var keystone = require('keystone');
var express = require('express')
var router = express.Router();

router.get('/', function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'acao';

	// locals.section is used to set the currently selected
	// item in the header navigation.
	res.locals.section = 'Alunos em Ação';

	// Render the view
	view.render('alunos_em_acao');
});

module.exports = router;
