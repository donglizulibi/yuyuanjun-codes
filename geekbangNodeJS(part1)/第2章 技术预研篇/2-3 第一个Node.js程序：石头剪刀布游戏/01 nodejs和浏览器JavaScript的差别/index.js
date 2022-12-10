const str = 'hello world';
console.log(str);

// 以下的变量或者数据类型都可以打印出来
console.log(Date)
console.log(Math)
console.log(setTimeout)
console.log(setInterval)

// requestAnimationFrame方法需要关联到浏览器，所以在nodejs中无法显示
// console.log(requestAnimationFrame)

// 为了弥补与requestAnimationFrame相似的功能
// nodejs提供了setImmediate方法
console.log(setImmediate)

// 此外是nodejs特有的方法
console.log(__filename) // 当前所运行程序的文件的位置
console.log(__dirname) // 当前所运行程序文件所在的文件夹位置