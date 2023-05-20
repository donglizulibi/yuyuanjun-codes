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
// 在继承关系中, protected保护的属性或者方法可以自由调用
var Person = /** @class */ (function () {
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    Person.prototype.show = function () {
        return "\u59D3\u540D:".concat(this.name, " \u5E74\u9F84:").concat(this.age);
    };
    return Person;
}());
// 在这个例子中, 把两个内置属性放在父类中
// 则子类在使用super把内置属性全部接受过来的时候
// 需要在子类的constructor中，把args变成元组的类型
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
