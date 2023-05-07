// 一般限定内容类型的数组只是限定了数组内部需要有哪些类型的数据
// 但是不会限定某个位置上必须是某种类型的数据
// 比如, 把以下数组的某一项改成不同类型的数据, 是不会报错的
let arr: (string | boolean | number)[] = ["houdunren", true, 123];
arr[0] = 234;
console.log(arr);

// 而元组把数据类型定义在数组符号里面, 就限定了数组每个位置的数据的类型
// 在这个情况下, 可以把元组中的某一项目改为同一类型的其他数据, 但是不能改成其他类型
let array: [string, boolean, number] = ["houdunren", true, 123];
array[0] = "hdcms";
// array[1]=123 // 会报错
console.log(array);
