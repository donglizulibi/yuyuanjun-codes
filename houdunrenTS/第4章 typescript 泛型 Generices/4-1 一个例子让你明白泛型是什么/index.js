// 首先来看一个例子，假如有一个函数，起作用是返回其参数，而且参数可能是不同的类型
function func(arg) {
    return arg;
}
console.log(func("houdunren"));
console.log(func(123));
console.log(func(true));
// 上面的做法中，不管传入什么类型的参数，都是默认了参数和函数返回值的类型是any类型
// 对于ts来说，这是没有什么意义的
// 如果要对参数的类型进行严格限制，则可能要定义三个函数
function funcString(arg) {
    return arg;
}
function funcNumber(arg) {
    return arg;
}
function funcBoolean(arg) {
    return arg;
}
console.log(funcString("houdunren"));
console.log(funcNumber(123));
console.log(funcBoolean(true));
// 而这三个函数的函数体都是一致的, 所以这样的方式是低效率的
// 由此出现泛型，泛型其实就是把类型本身也作为一种变量，放在函数里
// 对于同一个函数，可以做到需要这个函数的参数或者返回值是什么样的类型
// 就传入什么的类型到泛型中去
// 具体的方法是在方法名后使用尖括号，里面使用T作为形参
function funcGeneric(arg) {
    return arg;
}
// 在具体传递参数的时候，可以根据参数的类型，手动定义泛型的类型
var str = funcGeneric('houdunren');
console.log(str);
// 当然如果不去手动定义，具备泛型的函数也可以自动推断出函数返回值的类型
var num = funcGeneric(123);
var bool = funcGeneric(true);
console.log(num);
console.log(bool);
