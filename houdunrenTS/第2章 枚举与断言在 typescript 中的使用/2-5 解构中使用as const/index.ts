// 假如有一个函数, 内部定义了各种类型的变量,
// 现在需要把这些变量放在一个数组中返回出去
// 在返回的时候, 需要使用as const断言, 把返回的数组变成一个元组
function hd() {
  let str = "houdunren";
  let func = (a: number, b: number) => a + b;
  let push = (...args: any[]) => [123, ...args];
  let num = 99;
  //   return [str, func, push, num];
  return [str, func, push, num] as const;
}

// 现在通过解构的方式调用其中某个变量
// 如果函数运行的结果不是一个元组, 则创建的用于解构的数组中的变量
// 无法与函数结果的数组中的项目一一对应
const [str, func, push, num] = hd();
console.log(push(1, 2));

