var User = /** @class */ (function () {
    function User(n, a) {
        this.name = n;
        this.age = a;
    }
    User.prototype.func = function () { };
    return User;
}());
// 使用类创建实例, 这个实例的类型推断就是类本身
var u1 = new User("houduren", 19);
var u2 = new User("hdcms", 18);
// 如果需要把构造的实例放到数组里, 则这个数组的类型就是User[]
var arr = [u1, u2];
