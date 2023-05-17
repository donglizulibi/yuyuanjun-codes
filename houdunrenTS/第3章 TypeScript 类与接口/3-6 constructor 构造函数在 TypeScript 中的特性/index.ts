// 类中定义的内置属性可以和constructor中的参数不一致
class User1 {
  public name: string;
  constructor(n: string) {
    this.name = n;
  }
}

// 也可以改成相同的
class User2 {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 相当于
class User3 {
  constructor(public name: string) {
    this.name = name;
  }
}

// 在constructor中运行方法，以实现参数的初始化
class User4 {
  constructor(public name: string) {
    this.name = this.init(name);
  }
  public init(name: string) {
    return `${name} - houdunren`;
  }
}

console.log(new User4('hdcms'))
