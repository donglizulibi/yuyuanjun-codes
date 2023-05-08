// 上个例子提到如果给一个变量的类型限定的具体的数据
// 则这个变量的值就只能是限定的数据中的一个
// 假如只限定一个数据
var hd = "houdunren";
// 就相当于
var hdd = "houdunren";
// 如果把as const断言运用在数组上, 定义三个变量, 分别是
// 一个字符串 一个布尔值 一个使用断言后的数值
var a = "hdcms";
var b = true;
var c = 99;
// 再把这个三个变量和其他数据放进两个数组, 对其中一个数组进行断言
var arr1 = [a, b, c, 100, "houdunren"];
var arr2 = [a, b, c, 100, "houdunren"];
// arr2是一个只读数组
console.log(arr2[2]);
// 把以下两个变量作为obj的属性的属性值
// name属性的限定类型是string, 而age限定为具体的数值
// 把as const运用在对象上, 则对象变为只读数据
var obj = { name: a, age: c };
// obj.name = "houdunren";
// obj.age= 19
// console.log(obj.name = 'houdunren')
