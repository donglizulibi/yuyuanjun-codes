// 现在定义两个变量, 并将这两个变量放到都放到两个数组中
// 其中一个数组使用as const断言, 其中arr3是as const的另一种写法
var a = 'houdunren';
var b = 99;
var arr1 = [a, b];
var arr2 = [a, b];
var arr3 = [a, b];
// 再创建两个变量, 分别指代两个数组的第二项
// 由于第一个数组不是一个元组, 所以数组中允许的类型都可以赋值给新变量
// 而第二个数组是一个元组, 只能赋值给当下那个项目的类型
var f1 = arr1[1];
var f2 = arr2[1];
f1 = 'hdcms';
// f2 = 'hdcms'
f1 = 100;
f2 = 100;
