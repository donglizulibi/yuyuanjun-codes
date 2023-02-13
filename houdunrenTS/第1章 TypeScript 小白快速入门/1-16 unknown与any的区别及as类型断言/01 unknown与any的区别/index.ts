// 现在分别使用any和unknow类型定义变量
// 都是先把各自的变量赋值为一个字符串
// 然后再把这个变量赋值给一个string变量

// 结果使用any类型的变量可以赋值成功
// 而使用unknow类型的变量无法赋值
let hd:any = 'houdunren'
let a: string = hd
console.log(a)
console.log(typeof a)

let xj:unknown = 'hdcms'
// let b:string= xj

// 这两种赋值都可以
// let b= xj
// let b:unknown= xj

// 虽然xj变量的类型还是string，但是还是不能赋值给unknow类型变量
console.log(typeof xj)

// 结论就是any类型可能是string、number、Boolean等之中的某个类型
// 而unknown不属于任何类型，不是string，也不是number

// 即使xj变量的值就是一个字符串，但是这个变量的类型定义为unknow类型
// 就不会是string

// 就相当于
// let hc = 123
// let c:string = hc
// hc已经是number类型，就不会再是string类型