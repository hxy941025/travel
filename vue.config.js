const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    devServer: {
        proxy: {
            //此处指请求api目录时
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    //当以api开头时，替换为后面的
                    '^/api': '/mock'
                }
            }
        }
    },
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