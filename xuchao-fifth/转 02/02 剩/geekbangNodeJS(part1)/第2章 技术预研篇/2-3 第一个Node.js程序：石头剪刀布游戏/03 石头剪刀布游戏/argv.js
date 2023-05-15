console.log(process.argv)

// 输入node argv rock，用户输入的数据放在执行文件的指令之后
// 返回一个数组，用户输入的数据在数组的最后一项

// 取到数据
console.log(process.argv[process.argv.length - 1])