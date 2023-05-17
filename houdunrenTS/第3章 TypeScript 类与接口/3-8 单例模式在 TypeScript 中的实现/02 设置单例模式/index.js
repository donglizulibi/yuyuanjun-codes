// 单例模式是设计模式中的一种, 在该模式下类只能创建一次实例
// 给类设置一个静态属性, 这个属性是类的实例或者null, 初始值设置为null
// 在创建实例的静态方法中对这个静态属性进行判断
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.func();
    }
    User.created = function (name) {
        if (User.instance == null) {
            User.instance = new User(name);
        }
        return instance;
    };
    User.prototype.func = function () {
        console.log("类内部的方法");
    };
    User.instance = null;
    return User;
}());
var instance = User.created("houdunren");
var instance2 = User.created("houdunren");
//  创建了两个实例, 但是constructor中的内容只会执行一次
