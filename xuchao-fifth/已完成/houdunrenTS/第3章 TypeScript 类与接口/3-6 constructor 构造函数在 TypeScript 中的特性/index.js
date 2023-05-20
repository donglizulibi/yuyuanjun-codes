// 类中定义的内置属性可以和constructor中的参数不一致
var User1 = /** @class */ (function () {
    function User1(n) {
        this.name = n;
    }
    return User1;
}());
// 也可以改成相同的
var User2 = /** @class */ (function () {
    function User2(name) {
        this.name = name;
    }
    return User2;
}());
// 相当于
var User3 = /** @class */ (function () {
    function User3(name) {
        this.name = name;
        this.name = name;
    }
    return User3;
}());
// 在constructor中运行方法，以实现参数的初始化
var User4 = /** @class */ (function () {
    function User4(name) {
        this.name = name;
        this.name = this.init(name);
    }
    User4.prototype.init = function (name) {
        return "".concat(name, " - houdunren");
    };
    return User4;
}());
console.log(new User4('hdcms'));
