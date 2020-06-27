const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '@c': resolve('src/components'),
                'styles': resolve('src/assets/styles'),
                'views': resolve('src/views'),
                'api': resolve('src/api')
            }
        }
    },
};