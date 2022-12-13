const hd = ['houdunren']
// const hd: string[] 表示对一个数组进行类型限制，数组里面的项目只能是字符串
hd.push('hdcms')

// hd.push(123)

console.log(hd)

const arr = ['houdunwang',123,false]
// const arr: (string | number | boolean)[]

arr.push('str',222,true)

console.log(arr)
