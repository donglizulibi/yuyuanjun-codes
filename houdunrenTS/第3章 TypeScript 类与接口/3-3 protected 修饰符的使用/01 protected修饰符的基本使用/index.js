// 在定义类的内置属性或者方法的时候, 如果在其名称前加上protected
// 表示这个属性或者方法可以在类的内部调用, 但是对于类创建出的实例对象来说, 是不公开的
var User = /** @class */ (function () {
    function User(n, a) {
        this.name = n;
        this.age = a;
    }
    User.prototype.func = function () {
        return this.show();
    };
    User.prototype.show = function () {
        return "\u59D3\u540D:".concat(this.name, " \u5E74\u9F84:").concat(this.age);
    };
    return User;
}());
var user = new User("houduren", 19);
// user.name
// user.show()
console.log(user.age);
console.log(user.func());
