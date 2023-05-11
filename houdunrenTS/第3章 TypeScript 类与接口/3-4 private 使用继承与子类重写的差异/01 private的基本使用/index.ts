// 在继承关系中, protected保护的属性或者方法可以自由调用
class Person {
    protected name: string;
    public age: number;
    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }
  
    protected show() {
      return `姓名:${this.name} 年龄:${this.age}`;
    }
  }
  
  // 在这个例子中, 把两个内置属性放在父类中
  // 则子类在使用super把内置属性全部接受过来的时候
  // 需要在子类的constructor中，把args变成元组的类型
  class User extends Person {
    constructor(...args: [string, number]) {
      super(...args);
    }
  
    public func() {
      console.log(this.name);
      return this.show();
    }
  }
  
  const user = new User("houduren", 19);
  console.dir(user);
  
  console.log(user.age);
  console.log(user.func());
  