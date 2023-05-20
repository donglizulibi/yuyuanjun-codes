// 对于类中公开的属性和方法, 在标准写法中, 应该在其名称前面加上public
// 如果不加, 也会默认为public
class User {
  public name: string;
  public age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
  public func() {}
}

const u1 = new User("houduren", 19);
const u2 = new User("hdcms", 18);

// 一个知识点复习
// 在类的构造实例对象中, 属性是对象所有的, 方法是在对象的原型链上的
console.log("u1的区域");
for (const key in u1) {
  console.log(u1[key]);
}

console.log("u2的区域");
for (const key in u2) {
  if (u2.hasOwnProperty(key)) {
    console.log(u2[key]);
  }
}
