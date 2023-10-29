module.exports = {
    devServer: {
        proxy: {
            "/api": {
                //  '/api'并不是关键字
                target: "https://api.binstd.com/recipe/",
                // 将来就会用/api来代替target里面的地址
                changeOrigain: true,
                pathRewrite: {
                    "^/api": ""
                        // 表示在替换的时候，把/api换成空字符，否则原来的地址会凭空多出一个/api
                }
            }
        }
    }
}