// 设置一个有length属性的类型
// 则字符串和数组都可以被这个类型所约束
type LengthType = { length: number };

let str: LengthType = "houdunren";

let arr: LengthType = [1, 2, 3, 4];


// 数值、对象就不可以
