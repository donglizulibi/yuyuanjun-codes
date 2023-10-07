module.exports = {
    entry: './src/index.js', // 打包的入口文件 
    output: './dist/main.js', // 打包的输出
    mode: 'production', // 环境 （表示是在开发环境还是生产环境）
    module: {
        rule: [ // Loader配置
            { test: ..., use: '' }
        ]
    },
    plugins: [ // 插件配置
        new HtmlwebpackPlugin({
            template: './src/index.html'
        })
    ]
}