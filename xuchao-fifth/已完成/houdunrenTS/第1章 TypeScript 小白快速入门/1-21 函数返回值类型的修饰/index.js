// 箭头函数中定义返回值类型的方式
var sum = function (a, b) {
    return "\u603B\u548C:".concat(a + b);
};
// 这个void最好不要忽略,保证在阅读函数第一行的时候就知道整个函数的返回值类型
var msg = function () { return console.log("消息"); };
console.log(sum(2, 3));
msg();
