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

    descricao: { type: Types.Html, wysiwyg: true, height: 200 },
    local: { type: String },

    imagem: { type: Types.CloudinaryImage },

    categorias: { type: Types.Relationship, ref: 'CategoriaEvento', many: true },
});

Evento.defaultColumns = 'titulo, dataInicial|20%, local|20%'

Evento.register();
