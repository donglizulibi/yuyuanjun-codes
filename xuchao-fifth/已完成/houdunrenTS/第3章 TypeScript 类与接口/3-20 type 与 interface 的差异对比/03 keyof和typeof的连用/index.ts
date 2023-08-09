const img = document.createElement("img");

const images = { tank: img, straw: img, aa: img };
console.log(typeof images);

type typeKey = typeof images;
type make = keyof typeof images;

// 将keyof和typeof连用可以将一个对象的所有属性的属性名集中起来
// 变成一个值类型联合类型规范
// 此时make相当于type make = "tank" | "straw" | "aa"

// 如下面的定义是合法的
const demo:make = 'aa'

console.log(demo)