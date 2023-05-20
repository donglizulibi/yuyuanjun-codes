var HD = /** @class */ (function () {
    function HD() {
        this.get = function () { return 'houdunren'; };
    }
    return HD;
}());
// let hd = new HD()
// console.log(hd.get())
// 如果在创建类实例的时候，不在变量名后面加上any
// 则后面该实例在调用一个类中没有定义的内置方法的时候
// 会在编译环节报错
// 但是在变量名后面加上any之后，就会跳过验证的步骤
// 在执行的时候再报错
var hd = new HD();
console.log(hd.show());
