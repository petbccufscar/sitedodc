var keystone = require('keystone');
var express = require('express');
var moment = require("moment");
var router = express.Router();

router.get('/', function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'noticias';

	view.on('init', function (next) {
		keystone.list('Noticia')
			.paginate({
				page: req.query.page || 1,
				perPage: 9,
			})
			.where('status', 'publicado')
			.sort('-dataPublicacao')
			.select('_id titulo subtitulo imagemPrincipal dataPublicacao')
			.exec(function (err, results) {
				if (err) {
					return next(err);
				}

				locals.noticias = results.results;
				locals.paginas = results.pages;
				locals.pagina_atual = results.currenrPage;
				locals.moment = moment;

				next();
			});
	});

	view.render('noticias');
});

router.get('/:id', function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'noticia ' + req.params.id;

	res.send(locals.section);
});

module.exports = router;
