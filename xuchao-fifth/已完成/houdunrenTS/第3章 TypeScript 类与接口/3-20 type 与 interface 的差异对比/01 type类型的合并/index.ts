// type不可以同名出现，如果要合并，就新建一个type，然后用&进行合并
type Age = {
  age: number;
};
type ID = {
  idNumber: number;
};
type Name = {
  name: string;
};

type User1 = Age & ID & Name;

// 也可以使用 | 表示，表示创建的变量只要符合所列举的规范中的一个就可以
type User2 = Age | ID | Name;

const user1: User1 = { name: "houdunren", age: 19, idNumber: 123 };
const user2: User2 = { idNumber: 99 };

console.log(user1)
console.log(user2)
