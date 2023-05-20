{
    // 现在定义一个函数，这个函数返回传入参数的length属性的属性值
    // 由于不确定传入的参数是什么类型，有可能是字符串，有可能是数组
    // 所以使用泛型来动态定义参数的类型，而这个函数返回的类型是确定的，就是数值
    // function getLength<T>(arg: T): number {
    //   return arg.length;
    // }
    // 如上方法定义函数之后会出现报错，因为泛函的参数T具体是什么
    // 要根据调用函数的时候传入具体的类型，或者根据函数的实参进行推断
    // 而初始定义在函数中的泛型T，可能是没有length属性的，所以会报错
    // 另一种解释的方式是，目前的泛型参数T内部没有任何规范
    // 解决这个问题的两种办法，一种是让泛型参数T继承一个包含length属性的规范
    // 使得T有一个初始值，后期调用函数的时候
    // 所传参数需要符合初始类型，然后再有具体的类型
    function getLength(arg) {
        return arg.length;
    }
    console.log(getLength("houdunren"));
    console.log(getLength(["a", "b", "c"]));
    // 另一种方法就是直接继承字符串和数组的联合类型
    function getLengthStringArr(arg) {
        return arg.length;
    }
    console.log(getLengthStringArr("houdunren"));
    console.log(getLengthStringArr(["a", "b", "c"]));
}
