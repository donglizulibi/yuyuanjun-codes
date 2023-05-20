var state = true;
// let state: boolean = true
var hd = 'houdunren';
// let hd: string = 'houdunren'
var num = 123;
// let num: number = 123
// let fun = function(){
//  console.log(123)
// }
var fun = function () {
    console.log(123);
};
fun();
// 在变量第一次创建的时候，即使不设置类型校验
// 也会根据创建的第一次赋值的数据自动补充一个类型校验
// 鼠标停留在变量名上就可以看到
