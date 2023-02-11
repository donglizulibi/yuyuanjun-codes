class HD{
    get=()=>'houdunren'
}

// let hd = new HD()
// console.log(hd.get())

// 如果在创建类实例的时候，不在变量名后面加上any
// 则后面该实例在调用一个类中没有定义的内置方法的时候会在编译环节就报错

// 但是在变量名后面加上any之后，就会跳过验证的步骤
// 在执行的时候再报错
let hd:any = new HD()
console.log(hd.show())