// 构造函数中的constructor默认是public模式的
// 这种模式下, 构造函数在创建实例的时候, 会自动执行constructor中的内容
// 如果把constructor设置为private或者protected
// 则不会自动执行, 也无法在class外部通过new关键字来创建实例

// 如果要创建实例可以在类内部定义一个返回new关键字创建的实例的静态方法
// 则调用此静态方法, 就可以得到类的实例

class User {
  static created(name: string) {
    return new User(name);
  }
  public name: string;
  private constructor(name: string) {
    this.name = name;
    this.func();
  }
  func() {
    console.log("类内部的方法");
  }
}

// new User() // 无法创建
const instance = User.created('houdunren')
console.log(instance)
instance.func()
