// 创建未定义对象变量
var hd1;
// 将对象的变量赋值为数组并不报错
var hd2 = [];
// 设置为函数和类也不报错
var hd3 = function () { };
var hd4 = /** @class */ (function () {
    function hd4() {
    }
    return hd4;
}());
console.log(hd2);
console.log(hd3);
console.dir(hd4);
// 限定一个对象中的属性，以及属性的数据类型
var hd5;
// hd5 = {name:'asdf'} // 会报错
// hd5 = {name:10,age:19} // 会报错
hd5 = { name: 'asdf', age: 19 };
// 设置对象中可有可无的属性，加上问号
var hd6;
hd6 = { name: 'zxcv' };
hd6 = { name: 'zxcv', url: 'www.zxcv.com' };
console.log(hd6);
