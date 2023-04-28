// 在tsconfig配置文件中 noImplicitAny属性为false，则表示放行运行默认any设置
// 则设置函数的时候可以不去设置参数的类型

// 如果希望在设置函数的时候，只要不设置参数的类型就报错
// 就将该属性为true,或者不设置该属性，则不允许默认any设置

// 这种不在形参中设置类型检验，就会默认为any设置
// function sum(a:any, b:any){
function sum(a, b){
    return a + b
}

console.log(sum(3,4))