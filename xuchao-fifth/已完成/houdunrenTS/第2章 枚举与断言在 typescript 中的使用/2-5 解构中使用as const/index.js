var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 假如有一个函数, 内部定义了各种类型的变量,
// 现在需要把这些变量放在一个数组中返回出去
// 在返回的时候, 需要使用as const断言, 把返回的数组变成一个元组
function hd() {
    var str = "houdunren";
    var func = function (a, b) { return a + b; };
    var push = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __spreadArray([123], args, true);
    };
    var num = 99;
    //   return [str, func, push, num];
    return [str, func, push, num];
}
// 现在通过解构的方式调用其中某个变量
// 如果函数运行的结果不是一个元组, 则创建的用于解构的数组中的变量
// 无法与函数结果的数组中的项目一一对应
var _a = hd(), str = _a[0], func = _a[1], push = _a[2], num = _a[3];
console.log(push(1, 2));
