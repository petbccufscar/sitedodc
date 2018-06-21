var keystone = require('keystone');
var middleware = require('./middleware');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: require('./views'),
	api: require('./api')
};

// Setup Route Bindings
exports = module.exports = function (app) {
<<<<<<< HEAD
<<<<<<< HEAD
	// Views
	app.get('/', routes.views.index);
	app.get('/acao', routes.views.alunos_em_acao);
=======
	// Home
	app.get('/', routes.views.home.index);
>>>>>>> fc30542fb9a1a06e05612c2d7ce16da374579d3b

	// Áreas
	app.get('/area/docente', routes.views.area_docente.index)
=======
>>>>>>> adbf0f45fdbaed3eaa501903ec8424cc89a6c9ee

	app.use('/', routes.views);
	app.use('/api', routes.api);

	/* Exemplo de páginas com passagem de parâmetros pela url */
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
