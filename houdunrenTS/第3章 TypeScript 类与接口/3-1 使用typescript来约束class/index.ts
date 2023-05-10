class User {
  name: string;
  age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
  func() {}
}

// 使用类创建实例, 这个实例的类型推断就是类本身
const u1 = new User("houduren", 19);
const u2 = new User("hdcms", 18);

// 如果需要把构造的实例放到数组里, 则这个数组的类型就是User[]
const arr = [u1, u2];
