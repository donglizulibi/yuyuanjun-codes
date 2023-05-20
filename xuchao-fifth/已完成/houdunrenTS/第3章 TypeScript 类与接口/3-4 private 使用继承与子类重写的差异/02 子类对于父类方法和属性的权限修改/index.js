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
// 父类中使用private定义的方法和属性，在子类无法调用
// 父类中使用public定义的方法，子类中可以使用public对方法进行重新定义并覆盖
// 父类中使用protected定义的方法，子类中可以使用protected覆盖，或者使用public覆盖
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.info = function () { };
    User.prototype.render = function () {
        return 123;
    };
    User.prototype.add = function () {
        return 123;
    };
    return User;
}());
var Hd = /** @class */ (function (_super) {
    __extends(Hd, _super);
    function Hd(args) {
        return _super.apply(this, args) || this;
    }
    Hd.prototype.info = function () { };
    Hd.prototype.render = function () {
        return 234;
    };
    Hd.prototype.add = function () {
        return 234;
    };
    return Hd;
}(User));
