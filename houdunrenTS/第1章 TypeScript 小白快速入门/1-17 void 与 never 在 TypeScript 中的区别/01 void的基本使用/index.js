// 在js中本没有空值的概念，但在ts中使用控制void来表示没有任何返回值的函数
// 如果把一个变量定义为空值类型，则这个变量的值只能是undefined和null
// 而且已经被定义void类型的变量不能再被赋予其他类型的数据
//  let hd:void = 'hou'
//  let hd:void = 123
var hd = undefined;
var hdd = null;
console.log(hdd);
// 如果要把一个类型为控制的变量赋值为null，则需要在tsconfig配置中
// 把"strictNullChecks"设置为false    
// 这个属性如果设置为true或者不设置，表示只有undefined是所有类型的子类型
// 但是设置为false表示null和undefined都是所有类型的子类型
// 在这个情况下，如下的赋值也是成立的
var hddd = null;
// 用void可以来定义一个函数的返回值类型，表示这个函数只能返回null或者undefined
// 则如下的函数就会报错
// function run():void{
//     return 123
// }
// 如果一个函数的返回值不确定是否是空值，可以用以下方法来设置类型校验
function run(param) {
    if (param) {
        return 123;
    }
    else {
        return undefined;
    }
}
