// 创建未定义对象变量
let hd1:object

// 将对象的变量赋值为数组并不报错
let hd2:object = []

// 设置为函数和类也不报错
let hd3:object=function(){}
let hd4:object=class{}

console.log(hd2)
console.log(hd3)
console.dir(hd4)

// 限定一个对象中的属性，以及属性的数据类型
let hd5:{name:string,age:number}
// hd5 = {name:'asdf'} // 会报错
// hd5 = {name:10,age:19} // 会报错

hd5 = {name:'asdf',age:19}

// 设置对象中可有可无的属性，加上问号
let hd6:{name:string, url?:string}
hd6 = {name:'zxcv'}
hd6 = {name:'zxcv',url:'www.zxcv.com'}

console.log(hd6)

