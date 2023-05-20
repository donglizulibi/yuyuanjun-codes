// 两种定义函数中可选参数及其默认值的方法

function sum(a: number, b: number, ratio?: number) {
  ratio = ratio || 0.6;
  return (a + b) * ratio;
}

function add(a: number, b: number, ratio: number = 0.6) {
  return (a + b) * ratio;
}

console.log(sum(2, 3));
console.log(add(2, 3));
