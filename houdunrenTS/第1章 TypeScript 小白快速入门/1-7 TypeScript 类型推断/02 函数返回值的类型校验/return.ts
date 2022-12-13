function fn(a:number,b:number):string{
    return  '结果是'+(a+b)
}

console.log(fn(1,2))

// 如果不在函数的形参上加上类型校验，则会显示:any
// 如果需要函数的返回值是一个字符串则可以在函数名后面加上:string