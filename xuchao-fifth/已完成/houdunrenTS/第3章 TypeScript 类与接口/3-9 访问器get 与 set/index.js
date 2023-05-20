// tsc index.ts -w -t es5
// 使ts文件在es5环境下运行
var User = /** @class */ (function () {
    function User(name) {
        this._name = name;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("houdunren");
console.log(user.name);
user.name = "hdcms";
console.log(user.name);
// 在获取实例的数组属性的时候，自动对数组进行格式化处理
var Article = /** @class */ (function () {
    function Article() {
        this.lists = [];
    }
    Object.defineProperty(Article.prototype, "articles", {
        get: function () {
            return this.lists.map(function (item) {
                item.title = item.title.substr(0, 2);
                return item;
            });
        },
        set: function (value) {
            this.lists = value;
        },
        enumerable: false,
        configurable: true
    });
    return Article;
}());
var article = new Article();
article.articles = [{ title: "houdunren" }, { title: "hdmcs" }];
console.log(article.articles);
