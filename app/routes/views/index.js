var keystone = require('keystone');
var express = require('express')
var router = express.Router();

// Views
var areas = require('./areas');

// Home
router.get('/', function (req, res){
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Render the view
	view.render('index');
});

router.use('/area', areas);

module.exports = router
