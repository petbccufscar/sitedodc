var keystone = require('keystone');
var Types = keystone.Field.Types;

var CategoriaEvento = new keystone.List('CategoriaEvento', {
    label: 'Categorias de Evento',

    autokey: { from: 'name', path: 'key', unique: true },

    singular: 'categoria de evento',
    plural: 'categorias de evento'
});

CategoriaEvento.add({
    name: { type: String, required: true }
});

CategoriaEvento.relationship({ ref: 'Evento', path: 'eventos', refPath: 'categorias' });

CategoriaEvento.register();
