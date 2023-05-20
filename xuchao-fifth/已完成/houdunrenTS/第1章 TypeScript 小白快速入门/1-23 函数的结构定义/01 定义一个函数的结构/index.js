// 前面介绍了如果创建变量的时候, 在变量后面加上Function
// 就限定这个变量只能是函数的类型
// 如果需要更细致的限制, 比如对定义的这个函数的参数和返回值的类型也要加以限制
// 就可以使用函数的结构定义
// 则在创建函数的变量的之后, 可以直接把函数结构定义的规则写在变量后面
var hd = function (num, str) {
    console.log(num);
    console.log(str);
    return 123;
};
var hdd = function (num, str) {
    console.log(num);
    console.log(str);
    return 123;
};
