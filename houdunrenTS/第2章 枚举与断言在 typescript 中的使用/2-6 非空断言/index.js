console.log(document.querySelector(".el"));
// 创建tsconfig文件夹, 开启strictNullChecks的属性
// 则如果此时想在ts文件中获取页面中的元素对象, 可以使用
var el1 = document.querySelector(".el");
// 如果需要更加严格的类型校验
// let el2:HTMLDivElement = document.querySelector('.el')
// 在开启strictNullChecks之后会报错
// 需要考虑到可能无法获取元素对象的情况, 所以类型校验要加上null
var el2 = document.querySelector(".el");
// 但是上面的方法可能会导致在调用对象属性的时候没有比较好的代码提示
// 或者直接报错, 因为null没有内部属性, 无法调用
// 则可以使用非空断言, 告诉ts校验系统, 这个变量不可能是空值
var el3 = document.querySelector('.el');
// 另一种表示非空断言的方法
var el4 = document.querySelector('.el');
console.log(el4);
