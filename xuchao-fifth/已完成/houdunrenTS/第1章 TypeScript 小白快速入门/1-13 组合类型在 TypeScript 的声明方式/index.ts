// 如果一个数据不确定是字符串还是数值
// 用 | 来区分
let hd: string | number

hd = 'houdunren'
console.log(hd) 

hd = 123
console.log(hd)

// 如果想创建一个数组变量，数组中的项目只能是数值或者字符串
let arr1: (string | number)[] = ['houdunren',1234]
console.log(arr1)

// 如果上面创建中不加上（）,表示这个变量只能是字符串，或者是只包含数值的数组
let arr2: string | number[] = [12,23]
console.log(arr2) 
arr2 = 'asdf'
console.log(arr2)

// 使用泛型的方式来定义变量
let arr3: Array<string | number | object> = ['houdunren',12,{}]
console.log(arr3)