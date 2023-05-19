// 前面有提到在一个interface接口中定义一个函数的规范
// 且这个规范有确定的函数名，调用这个接口的类或者对象就必须包括同名的方法
// 且参数和返回值都要符合规范

// 在interface接口中也可以定义没有名称的函数规范
// 然后使用创建变量的方式来定义函数
interface PayFunc {
  (): number;
}

// 这样是表示这个函数的返回值要符合函数规范
function render(): PayFunc {
  return () => 123;
}

const add: PayFunc = () => {
  return 123;
};
