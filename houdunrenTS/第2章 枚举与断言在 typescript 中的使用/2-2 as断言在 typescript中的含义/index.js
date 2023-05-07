// 定义更严格的字符串, 限定字符的范围
// 假如需要设置的字符串只可能有三个值, 那么可以做出以下限制
var a = "hdcms";
// 如果要修改这个字符串, 也只能改成这三个范围中的一个
a = "houdunren";
// a = 'asdf' // 会报错
// 现在设置一个函数, 其返回的值的类型可能是两种之一
function func(arg) {
    return arg ? "str" : 123;
}
// 将函数的运行结果赋值给一个变量, 则这个变量只能是字符串或者数值类型的
// 如果修改这个变量的结果到这两种类型中的一个, 是可以成功的
var res1 = func(true);
console.log(res1);
res1 = 1000;
// res1 = true // 会报错
console.log(res1);
// 则如果使用类型断言把函数运行的结果限定在某种特定的类型
// 或者某个特定的结果, 则往后如果要修改这个变量
// 就只能符合限定的要求, 才能修改成功
// let res2 = func(true) as string
var res2 = func(true);
console.log(res2);
// res2 = 'str'
// res2 = 100
res2 = 123;
console.log(res2);
