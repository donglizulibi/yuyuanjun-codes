'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'), // 指定创建的文件夹
        filename: 'bundle.js' // 执行创建的文件
    },
    mode: 'production'
};