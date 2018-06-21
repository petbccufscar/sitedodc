var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Modelo para Mensagem enviada pelo formulário de contato
 */

var Mensagem = new keystone.List('Mensagem', {
	nocreate: true,
	noedit: true,

	singular: 'mensagem',
    plural: 'mensagens',
});

Mensagem.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	
	// TODO: definir tipos de mensagens
	tipoDaMensagem: { type: Types.Select, options: [
		{ value: 'message', label: 'Just leaving a message' },
		{ value: 'question', label: 'I\'ve got a question' },
		{ value: 'other', label: 'Something else...' },
	] },

	conteudo: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now },
});

Mensagem.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	next();
});

Mensagem.schema.post('save', function () {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Mensagem.schema.methods.sendNotificationEmail = function (callback) {
	if (typeof callback !== 'function') {
		callback = function (err) {
			if (err) {
				console.error('Houve um erro ao enviar a notificação por email:', err);
			}
		};
	}

	if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
		console.log('Unable to send email - no mailgun credentials provided');
		return callback(new Error('could not find mailgun credentials'));
	}

	var mensagem = this;
	var brand = keystone.get('brand');

	keystone.list('User').model.find().where('isAdmin', true).exec(function (err, admins) {
		if (err) return callback(err);
		new keystone.Email({
			templateName: 'notificacao-mensagem',
			transport: 'mailgun',
		}).send({
			to: admins,
			from: {
				name: 'Site do DC',
				email: 'contato@dc.ufscar.com',
			},
			subject: '[Site do DC] Nova mensagem',
			message: mensagem,
			brand: brand,
		}, callback);
	});
};

Mensagem.defaultSort = '-createdAt';
Mensagem.defaultColumns = 'name, email, tipoDaMensagem, createdAt';
Mensagem.register();
