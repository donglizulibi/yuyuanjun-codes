// 类的静态属性和静态方法只能通过类本身来调用
var User = /** @class */ (function () {
    function User() {
    }
    User.getSite = function () {
        return User.site;
    };
    User.site = 'houdunren';
    return User;
}());
console.log(User.site);
console.log(User.getSite());
