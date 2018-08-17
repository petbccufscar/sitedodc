var keystone = require('keystone');
var middleware = require('./middleware');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: require('./views'),
	api: require('./api'),
};

// Setup Route Bindings
exports = module.exports = function (app) {

	app.use('/', routes.views);
	app.use('/api', routes.api);

	/* Exemplo de páginas com passagem de parâmetros pela url */
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
