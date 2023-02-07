const user = {name:'houdunren',age:18,open:true}

// 相当于
// const user: {
//     name: string;
//     age: number;
//     open: boolean;
// } = {name:'houdunren',age:18,open:true}

// user.age = 'sdf' // 已经规定了age属性的数据类型，修改成其他类型会报错

// 在对象套数组
const user1 = { name:"houdunren", lesson:[
    { title:'linux' }, { title:'TS' }
]}

//  自动类型推断 相当于 
// const user1: {
//     name: string;
//     lesson: {
//         title: string;
//     }[];
// }

// 也就是说，user1中lesson属性规定了
// “只能是一个数组，数组只能包含对象，对象中只能有title属性，属性值只能是字符串”

// 可以lesson变成一个空数组
// user1.lesson = []

// title属性值只能说字符串
user1.lesson.push({title:'hdcms'})

// 无法将lesson变成空字符串
// user1.lesson = ''

// 无法给lesson添加空对象
// user1.lesson.push({})

// title属性值只能是字符串
// user1.lesson.push({title:14})

console.log(user1)