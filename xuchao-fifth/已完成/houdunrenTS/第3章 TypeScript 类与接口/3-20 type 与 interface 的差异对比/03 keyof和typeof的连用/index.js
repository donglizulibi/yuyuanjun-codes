var img = document.createElement("img");
var images = { tank: img, straw: img, aa: img };
console.log(typeof images);
// 将keyof和typeof连用可以将一个对象的所有属性集中起来
// 变成一个值类型联合类型规范
