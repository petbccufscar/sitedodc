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

    // imagemPrincipal: { type: Types.LocalFiles, dest: './files/noticias', prefix: '/noticias',
            
    //         format: function(item, file){
    //             return '<img src="' + file.href + '" style="max-width: 300px">'
    //         }
        
    // },

    imagemPrincipal: { type: Types.File, storage: storage.images},

    outrasImagens: { type: Types.CloudinaryImages}
});

Noticia.defaultColumns = 'titulo, status|20%, dataPublicacao|15%'

Noticia.schema.post('save', function () {
	console.log(this.imagemPrincipal.url);
});

Noticia.register();
