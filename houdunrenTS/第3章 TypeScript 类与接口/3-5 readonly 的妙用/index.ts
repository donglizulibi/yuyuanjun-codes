// constructor前面也可以加上public，不加就默认为public
// readonly前面默认加上public，也可以加其他的
// readonly的数据只有在constructor中初始化的时候，才可以被修改
class User {
  private readonly site: string = "www.houdunren.com";
  protected name: string;
  protected age: number;
  //   constructor(site?:string){
  public constructor(name: string, age: number, site?: string) {
    this.name = name;
    this.age = age;
    this.site = site || this.site;
  }
  info() {
    // this.site = 'asdf' // 不可修改
    return `网址是${this.site}`;
  }
}

class Hd extends User {
  constructor(...args: [string, number, string?]) {
    super(...args);
  }
  get(){
    // return this.site
    // 这里site属性是private的，所以子类不可以调用
    return this.name
  }
}

const instance1 = new User("xiaoming", 19);
console.log(instance1.info());

const instance2 = new User("xiaohjua", 20, "www.yahoo.com");
console.log(instance2.info());

const instance3 = new Hd('houdunren',20)
console.log(instance3.get())

