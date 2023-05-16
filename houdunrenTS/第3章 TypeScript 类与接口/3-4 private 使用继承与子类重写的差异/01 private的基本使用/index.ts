// 私有属性就是只能在自己这个类中使用
class Person {
    protected name: string;
    public age: number;
    private site = 'houdunren.com'
    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }
  
    protected show() {
      return `姓名:${this.name} 年龄:${this.age} 网址:${this.site}`;
    }
  }
  

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
  