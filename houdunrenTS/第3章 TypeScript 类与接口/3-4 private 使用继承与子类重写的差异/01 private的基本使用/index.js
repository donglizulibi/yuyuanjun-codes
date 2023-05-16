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
// 私有属性就是只能在自己这个类中使用
var Person = /** @class */ (function () {
    function Person(n, a) {
        this.site = 'houdunren.com';
        this.name = n;
        this.age = a;
    }
    Person.prototype.show = function () {
        return "\u59D3\u540D:".concat(this.name, " \u5E74\u9F84:").concat(this.age, " \u7F51\u5740:").concat(this.site);
    };
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, args) || this;
    }
    User.prototype.func = function () {
        console.log(this.name);
        return this.show();
    };
    return User;
}(Person));
var user = new User("houduren", 19);
console.dir(user);
console.log(user.age);
console.log(user.func());
