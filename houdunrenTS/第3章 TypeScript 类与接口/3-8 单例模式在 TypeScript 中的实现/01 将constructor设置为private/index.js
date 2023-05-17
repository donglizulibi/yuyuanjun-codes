// 构造函数中的constructor默认是public模式的
// 这种模式下, 构造函数在创建实例的时候, 会自动执行constructor中的内容
// 如果把constructor设置为private或者protected
// 则不会自动执行, 也无法在class外部通过new关键字来创建实例
// 如果要创建实例可以在类内部定义一个返回new关键字创建的实例的静态方法
// 则调用此静态方法, 就可以得到类的实例
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.func();
    }
    User.created = function (name) {
        return new User(name);
    };
    User.prototype.func = function () {
        console.log("类内部的方法");
    };
    return User;
}());
// new User() // 无法创建
var instance = User.created('houdunren');
console.log(instance);
instance.func();
