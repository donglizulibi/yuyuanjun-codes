{
    var User = /** @class */ (function () {
        function User(info) {
            this._info = info;
        }
        Object.defineProperty(User.prototype, "info", {
            get: function () {
                return this._info;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var user = new User({ name: 'houdunren', age: 19, gender: 'male' });
    console.log(user.info);
}
