const hd = ['houdunren'];
// 相当于const hd: string[] = ['houdunren'] 表示对一个数组进行类型限制
// 数组里面的项目只能是字符串，往数组里面添加内容也只能字符串

hd.push('hdcms');
// hd.push(123)
// 添加数值会报错


console.log(hd);


const arr = ['houdunwang', 123, false];
// const arr: (string | number | boolean)[] = ['houdunwang', 123, false]
// 表示数组中的内容可以是字符串、数值和布尔值
arr.push('str', 222, true);
console.log(arr);