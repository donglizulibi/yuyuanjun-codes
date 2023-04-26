// 如果不在函数的形参上加上类型校验，则会显示:any
// function fn(a, b){
// return  a+b
// console.log(fn('abc',2)) 
// 这样传递值也是不报错的
// 手动限定传递参数的数据类型，此时如果把鼠标放在函数名上
// 会自动推断出返回结果的数据类型为数值
function fn(a, b) {
    return a + b;
}
console.log(fn(1, 2));
// 如果需要函数的返回值是一个字符串则可以在函数名后面加上:string
// 但由于数值相加还是数值，而ts不会进行自动的类型转换，所以可以在前面再加一段字符串
// function fn(a:number,b:number):string{
//     return  '结果是'+(a+b)
// }
// console.log(fn(1,2))
