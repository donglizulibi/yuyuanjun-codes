// 父类中使用private定义的方法和属性，在子类无法调用
// 父类中使用public定义的方法，子类中可以使用public对方法进行重新定义并覆盖
// 父类中使用protected定义的方法，子类中可以使用protected覆盖，或者使用public覆盖
class User {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  protected info() {}
  protected render() {
    return 123;
  }
  public add(){
    return 123
  }
}

class Hd extends User {
  constructor(args: [string, number]) {
    super(...args);
  }
  public info(): void {}
  protected render() {
    return 234;
  }
  public add(): number {
      return 234
  }
}
