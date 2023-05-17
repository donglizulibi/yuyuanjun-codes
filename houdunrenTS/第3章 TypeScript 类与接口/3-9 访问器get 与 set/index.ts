// tsc index.ts -w -t es5
// 使ts文件在es5环境下运行
class User {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
const user = new User("houdunren");
console.log(user.name);
user.name = "hdcms";
console.log(user.name);

// 在获取实例的数组属性的时候，自动对数组进行格式化处理
class Article {
  private lists: any[] = [];
  public get articles() {
    return this.lists.map((item) => {
      item.title = item.title.substr(0, 2);
      return item;
    });
  }
  public set articles(value: any[]) {
    this.lists = value;
  }
}

const article = new Article();
article.articles = [{ title: "houdunren" }, { title: "hdmcs" }];
console.log(article.articles);
