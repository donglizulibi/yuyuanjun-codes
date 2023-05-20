// 如果有一个函数，可以确认返回值的类型
// 也可以确认传入的参数是一个数组，但是无法确定数组中的数据的类型
// 则也可以使用泛函

function func<T>(arg: T[]): number {
  return arg.length;
}

console.log(func<string>(["houdunren", "hdcms"]));
console.log(func<string | number>(["houdunren", 123]));
console.log(func([1, 2, 3, 4]));
