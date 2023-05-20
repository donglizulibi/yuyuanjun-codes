// 在定义类的内置属性或者方法的时候, 如果在其名称前加上protected
// 表示这个属性或者方法可以在类的内部调用, 但是对于类创建出的实例对象来说, 是不公开的
class User {
  protected name: string;
  public age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
  public func() {
    return this.show();
  }
  protected show() {
    return `姓名:${this.name} 年龄:${this.age}`;
  }
}

const user = new User("houduren", 19);
// user.name
// user.show()

console.log(user.age);
console.log(user.func());
