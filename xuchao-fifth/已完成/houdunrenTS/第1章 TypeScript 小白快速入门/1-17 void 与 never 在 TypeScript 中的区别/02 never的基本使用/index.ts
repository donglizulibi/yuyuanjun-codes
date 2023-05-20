// 前面讲到，如果把一个函数的返回值类型定义为void
// 表示一个函数执行完毕，返回undefined或者null

// 但如果把函数返回值定义为never
// 就表示这个函数连undefined和null这样的返回值都没有
// 也就是函数根本没有执行完毕，比如一个抛出错误的函数
// 在遇到抛出错误的语句的时候，函数就停止了，不会执行完毕
// 也就没有任何返回值

// 如果定义了never类型，但是让函数没有任何返回值
// 会出现编译报错
// function run():never{
    
// }

function run():never{
    throw new Error()
}


console.log(run())