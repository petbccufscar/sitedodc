var keystone = require('keystone');
var express = require('express');
var async = require('async');
var moment = require('moment');
moment.locale('pt-br');
var router = express.Router();

// Views
var areas = require('./areas');
router.use('/area', areas);

var noticias = require('./noticias');
router.use('/noticias', noticias);

var acao = require('./alunos_em_acao');
router.use('/alunos_em_acao', acao);

// Home
router.get('/', function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.on('init', function (next) {
		keystone.list('Evento').model.find().limit(10).sort('dataInicial').select('_id titulo dataInicial').exec(function (err, results) {
			if (err) {
				return next(err);
			}

			locals.eventos = [];

			async.each(results, function (evento, next) {
				locals.eventos.push({
					_id: evento._id,
					titulo: evento.titulo,
					data: moment(evento.dataInicial).format('DD/MM'),
					horario: moment(evento.dataInicial).format('H[h]mm'),
				});

			}, function (err) {
				next(err);
			});
			next();
		});
	});

	view.on('init', function (next) {
		keystone.list('Noticia').model.find({ status: 'publicado' }).limit(6).sort('dataPublicacao').select('_id titulo subtitulo imagemPrincipal dataPublicacao').exec(function (err, results) {
			if (err) {
				return next(err);
			}

			locals.noticias = results;

			next();
		});
	});

	// Render the view
	view.render('index', { moment: moment });
});

module.exports = router;
