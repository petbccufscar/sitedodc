var keystone = require('keystone');
var path = require('path');

// Configuração da localização do diretorio de armazenamento de arquivos
var storagePath;
if (process.env.FILE_STORAGE_PATH) {
    storagePath = process.env.FILE_STORAGE_PATH
} else {
    storagePath = keystone.expandPath('../');
}

storagePath = path.join(storagePath, 'servedFiles')

module.exports = {
    images: new keystone.Storage({
        adapter: keystone.Storage.Adapters.FS,
        fs: {
            path: path.join(storagePath, 'images'),
            publicPath: '/images/',
        },
        schema: {
            url: true
        }
    }),

    storagePath: storagePath
}