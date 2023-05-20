// 假如现在需要定义两个或者多个函数, 每个函数的参数类型是一直的, 都是一个对象
// 则可以把这个对象封装出来, 变成一个变量, 这个变量就用type来定义
function addUser(user) {
    console.log("添加用户");
}
function updateUser(user) {
    console.log("修改用户");
}
addUser({ name: "houdunren", age: 19 });
updateUser({ name: "hdcms", age: 20, gender: 1 });
