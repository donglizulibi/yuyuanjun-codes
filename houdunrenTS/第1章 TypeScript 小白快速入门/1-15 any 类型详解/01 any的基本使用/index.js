// 给一个变量定义了any类型，就和js一样
var hd;
hd = 'houdunren';
hd = 19;
hd = undefined;
hd = null;
hd = {};
hd = /** @class */ (function () {
    function hd() {
    }
    return hd;
}());
// 数组内部不限定数据类型
var arr = [];
// 泛型形式 let arr:Array<any> = []
arr.push('asdf', 20, undefined, {});
console.log(hd);
console.log(arr);
