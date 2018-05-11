var keystone = require('keystone');
var storage = require('../conf/fileStorage');

var Types = keystone.Field.Types;

var Noticia = new keystone.List('Noticia', {
    label: 'Notícias',

    map: { name: 'titulo' },

    singular: "notícia",
    plural: "notícias",

    track: true,
});

Noticia.add({
    titulo: { type: String, required: true, initial: true},
    subtitulo: { type: String },
    
    status: { type: Types.Select, options: 'rascunho, publicado, arquivado', default: 'rascunho', index: true },
    dataPublicacao: { type: Types.Date, index: true, dependsOn: { status: 'publicado' } },

    conteudo: { type: Types.Html, wysiwyg: true, height: 500},
    
    // TODO: 
    //imagemPrincipal: { type: Types.File, storage: storage.images},

    imagemPrincipal: { type: Types.CloudinaryImage },

    outrasImagens: { type: Types.CloudinaryImages}
});

Noticia.defaultColumns = 'titulo, status|20%, dataPublicacao|15%'

Noticia.schema.post('save', function () {
	console.log(this.imagemPrincipal.url);
});

// Noticia.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

Noticia.register();
