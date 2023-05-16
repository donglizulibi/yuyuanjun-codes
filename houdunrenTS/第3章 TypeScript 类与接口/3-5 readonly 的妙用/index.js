var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// constructor前面也可以加上public
// readonly前面默认加上public，也可以加其他的
// readonly的数据只有在constructor中初始化的时候，才可以被修改
var User = /** @class */ (function () {
    //   constructor(site?:string){
    function User(name, age, site) {
        this.site = "www.houdunren.com";
        this.name = name;
        this.age = age;
        this.site = site || this.site;
    }
    User.prototype.info = function () {
        // this.site = 'asdf' // 不可修改
        return "\u7F51\u5740\u662F".concat(this.site);
    };
    return User;
}());
var Hd = /** @class */ (function (_super) {
    __extends(Hd, _super);
    function Hd() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, args) || this;
    }
    Hd.prototype.get = function () {
        // return this.site
        // 这里site属性是private的，所以子类不可以调用
        return this.name;
    };
    return Hd;
}(User));
var instance1 = new User("xiaoming", 19);
console.log(instance1.info());
var instance2 = new User("xiaohjua", 20, "www.yahoo.com");
console.log(instance2.info());
var instance3 = new Hd('houdunren', 20);
console.log(instance3.get());
