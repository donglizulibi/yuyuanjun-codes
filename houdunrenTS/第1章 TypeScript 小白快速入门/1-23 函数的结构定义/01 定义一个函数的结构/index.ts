// 前面介绍了如果创建变量的时候, 在变量后面加上Function
// 就限定这个变量只能是函数的类型

// 如果需要更细致的限制, 比如对定义的这个函数的参数和返回值的类型也要加以限制
// 就可以使用函数的结构定义

// 则在创建函数的变量的之后, 可以直接把函数结构定义的规则写在变量后面

let hd: (a: number, b: string) => number = (num, str) => {
  console.log(num);
  console.log(str);
  return 123;
};

// 其中, 函数结构定义的规则就是(a: number, b: string) => number
// 表示这个函数的参数是分别为数值类型和字符串类型, 返回值是数值类型
// 其中 a 和 b 只是定义规则的字符, 后面的形参可以是与之不同

// 为使得结构清晰, 可使用type定义结构的规则
type hdFunc = (a: number, b: string) => number;

let hdd: hdFunc = (num, str) => {
  console.log(num);
  console.log(str);
  return 123;
};
