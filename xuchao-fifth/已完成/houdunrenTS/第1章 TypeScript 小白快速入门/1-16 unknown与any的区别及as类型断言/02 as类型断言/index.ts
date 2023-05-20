// 上个例子说明了unknow也是一种独特的类型，但是这个类型未知

// 那么可以通过类型断言（as）的方法来确定这个未知类型到底是什么

// 还是上个例子
// 首先构建出unknow变量
let xj: unknown = 'houdunren'

// 然后在需要将xj变量赋值给其他变量
// 需要确定xj变量的具体类型的时候
// 使用断言
let b:string = xj as string
console.log(b)

let obj:unknown = {name:'houdunren'}
let c:object = obj as object

