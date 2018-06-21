// TODO: trocar a forma de armazenamento de imagens para utilizar o storage local
// var storage = require('../conf/fileStorage');

var keystone = require('keystone');
var Types = keystone.Field.Types;

var Evento = new keystone.List('Evento', {
    map: { name: 'titulo' },

    autokey: { path: 'key', from: 'titulo dataInicial', unique: true },

    singular: 'evento',
    plural: 'eventos',

    defaultSort: 'dataInicial',
    track: true
});

Evento.add({
    titulo: { type: String, required: true, initial: true },
    dataInicial: { type: Types.Datetime, required: true, initial: true, index: true },
    dataFinal: { type: Types.Datetime },
    
    local: { type: String },
    categorias: { type: Types.Relationship, ref: 'CategoriaEvento', many: true },

        
    // TODO: trocar para  --> imagemPrincipal: { type: Types.File, storage: storage.images}
    imagem: { type: Types.CloudinaryImage },

    descricao: { type: Types.Html, wysiwyg: true, height: 200 }
});

// Colunas que serão mostradas na área de admin
Evento.defaultColumns = 'titulo, dataInicial|20%, local|20%'

Evento.register();
