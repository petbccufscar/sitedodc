var keystone = require('keystone');

exports.index = function (req, res) {
	var view = new keystone.View(req, res);

	// locals.section is used to set the currently selected
	// item in the header navigation.
	res.locals.section = 'Área do Docente';

	// Render the view
	view.render('area_docente');
};
