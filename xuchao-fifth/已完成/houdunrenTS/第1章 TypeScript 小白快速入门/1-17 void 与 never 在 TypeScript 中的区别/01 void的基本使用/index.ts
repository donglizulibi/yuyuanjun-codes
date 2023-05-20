// 在js中本没有空值的概念，但在ts中使用控制void来表示没有任何返回值的函数

// 如果把一个变量定义为空值类型，则这个变量的值只能是undefined和null
// 而且已经被定义void类型的变量不能再被赋予其他类型的数据
//  let hd:void = 'hou'
//  let hd:void = 123

let hd: void = undefined;
let hdd: void = null;
console.log(hdd);

// 如果要把一个类型为空值的变量赋值为null，则需要在tsconfig配置中
// 把"strictNullChecks"设置为false

// 这个属性如果设置为true或者不设置，则对于null的校验会更家严格
// 此时就无法将void类型的变量赋值为null
// 对于以下这两种，把null和undefined赋值给其他类型的变量的操作也是不允许的
let hddd: number = null;
let hdddd: number = undefined;

// 用void可以来定义一个函数的返回值类型，表示这个函数只能返回null或者undefined
// 则如下的函数就会报错
// function run():void{
//     return 123
// }

// 如果一个函数的返回值不确定是否是空值，可以用以下方法来设置类型校验
function run(param: any): number | void {
  if (param) {
    return 123;
  } else {
    return undefined;
  }
}
