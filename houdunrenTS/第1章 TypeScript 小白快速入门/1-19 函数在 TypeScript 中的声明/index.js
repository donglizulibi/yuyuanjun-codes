// 关于函数的类型推断
// 下面定义三种函数，一种是采用变量方式定义普通函数
// 一种是采用变量方式定义箭头函数，一种是直接定义普通函数
// 根据类型推断，前两种都是箭头函数，第三种的普通函数
// 返回值都是void
var hd = function () { };
var hdd = function () {
};
function hddd() {
}
// 如果需要直接明确地定义函数, 需要用Function, 注意是大写
var hdddd = function () { };
