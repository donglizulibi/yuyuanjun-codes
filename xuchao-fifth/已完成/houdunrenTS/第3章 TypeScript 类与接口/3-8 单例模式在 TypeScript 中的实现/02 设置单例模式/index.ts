// 单例模式是设计模式中的一种, 在该模式下类只能创建一次实例

// 给类设置一个静态属性, 这个属性是类的实例或者null, 初始值设置为null
// 在创建实例的静态方法中对这个静态属性进行判断
class User {
  private static instance: User | null = null;
  static created(name: string) {
    if(User.instance == null){
        User.instance = new User(name)
    }
    return instance;
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


const instance = User.created("houdunren");
const instance2 = User.created("houdunren");
//  创建了两个实例, 但是constructor中的内容只会执行一次

