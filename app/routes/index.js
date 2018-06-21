var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
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


	/* Exemplo de páginas com passagem de parâmetros pela url */
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
