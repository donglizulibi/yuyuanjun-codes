// 现在定义一个函数，这个函数的参数需要传入一个类，函数的返回值是这个类创建的实例
// 那么现在面临的问题是如何定义这个参数的类型
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// 那么现在新建一个变量，将类赋值给这个变量，则这个新建的变量就可以调用之前的接口
var Personclass = Person;
// 使用新变量来构造实例
var personInstance = new Personclass("John", 19);
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
// function newInstance(classParam: any) {
function newInstance(classParam) {
    return new classParam("hd", 20);
}
console.log(newInstance(User));
