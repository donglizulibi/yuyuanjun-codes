// 现在定义一个函数，这个函数的参数需要传入一个类，函数的返回值是这个类创建的实例
// 那么现在面临的问题是如何定义这个参数的类型

// 首先定义一个用来描述有constructor的类的接口
// 这个接口使用了new关键字，new后面的内容表示类的constructor有两个参数
// 分别是string和number类型，这个类创建的实例的Person类型的
interface PersonConstructor {
  new (name: string, age: number): Person;
}

class Person {
  constructor() {}
}

// 那么现在新建一个变量，将类赋值给这个变量，则这个新建的变量就可以调用之前的接口
const Personclass: PersonConstructor = Person;

// 使用新变量来构造实例
const personInstance = new Personclass("John", 19);

// 现在创建一个函数，传入的参数是一个类，则这个参数的类型约束也可以
// 用一个含有new关键字的interface接口来指代
interface classInterface {
  new (name: string, age: number): User;
}

class User {
  constructor(protected name: string, protected age: number) {}
}
// function newInstance(classParam: any) {
function newInstance(classParam: classInterface) {
  return new classParam("hd", 20);
}

console.log(newInstance(User));
