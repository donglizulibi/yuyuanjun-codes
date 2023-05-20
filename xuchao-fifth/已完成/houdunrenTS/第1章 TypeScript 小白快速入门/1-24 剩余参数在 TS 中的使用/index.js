// 有多个不确定数量的参数
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var res = args.reduce(function (pre, val) {
        pre += val;
        return pre;
    }, 0);
    return res;
}
console.log(sum(1, 2, 3, 4));
// 第一个参数是确定的, 但是后面的参数都不确定
function push(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    arr.push.apply(arr, args);
    return arr;
}
var hd = ['houdunren'];
console.log(push(hd, 'abc', 123, true));
