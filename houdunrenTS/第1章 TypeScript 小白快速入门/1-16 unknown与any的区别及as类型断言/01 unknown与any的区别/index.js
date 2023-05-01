// 之前有例子讲到，如果在创建一个类的实例时，给这个实例加上any类型
// 则当调用实例中的并不存在的方法时，并不会报错，因为any不会进行ts校验
// 现在定义一个any类型的变量，不给这个变量赋值，则变量的类型是undefined
// 将一个数值赋值给这个变量，此时检测这个变量的类型，为number
// 然后再定义一个变量，将这个变量的类型定义为string，变量的值由上个变量所赋予
// 后定义的变量的类型也成了number
// let hd:any
var hd = 123;
console.log(typeof hd);
var a = hd;
console.log(a);
console.log(typeof a);
// 现在再定义一个变量，设置为unknown类型，并以数值赋值给这个变量
// 类型检测到这个变量类型是number
// 再创建一个变量，设置为string，将上面的unknown变量赋值给这个变量
// 是无法赋值的
// 但是如果创建的变量是any或者unknown本身，则可以把这个原本的unknown类型赋值上去
var hdd = 123;
console.log(typeof hdd);
// let b:string = hdd
var c = hdd;
var d = hdd;
// any和unknown都是ts中的顶级类型，二者都可以被赋值于任意类型的数据
// 
var obj = {};
obj.name = 'houdunren';
console.log(obj);
