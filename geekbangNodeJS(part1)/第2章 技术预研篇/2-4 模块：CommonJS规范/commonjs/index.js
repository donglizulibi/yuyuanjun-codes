console.log('before lib')
require('./lib')
console.log('after lib')

// 引入library中导出的数据和方法
let res = require('./library')
console.log(res)
console.log(res.add(1, 2))