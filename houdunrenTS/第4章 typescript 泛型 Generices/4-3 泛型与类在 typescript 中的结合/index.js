// 在类中使用泛型
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.push = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, args);
    };
    // 为防止data为空的时候，出现返回值为undefined，从而不符合返回值为泛函T的情况
    // 可以对返回值进行非空断言，或者把undefined的情况考虑进去
    //   public shift(): T {
    //     return this.data.shift()!;
    //   }
    // 或者
    Collection.prototype.shift = function () {
        return this.data.shift();
    };
    return Collection;
}());
// 传入数值
var collectionNumber = new Collection();
collectionNumber.push(1, 2, 3, 4);
console.log(collectionNumber.shift());
// 传入字符串
var collectionString = new Collection();
collectionString.push("a", "b", "c", "d");
console.log(collectionString.shift());
var user1 = { name: "houdunren", age: 19 };
var user2 = { name: "hdcms", age: 20 };
var collectionUser = new Collection();
collectionUser.push(user1, user2);
console.log(collectionUser.shift());
