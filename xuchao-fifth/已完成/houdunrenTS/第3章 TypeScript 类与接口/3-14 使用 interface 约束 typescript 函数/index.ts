// 使用interface定义的类型接口来约束普通对象、函数的参数和函数的返回值
interface UserInterface {
  name: string;
  age: number;
  isLock: boolean;
}

const user: UserInterface = {
  name: "houdunren",
  age: 19,
  isLock: false,
};

function userFunc(user: UserInterface, lock: boolean): UserInterface {
  user.isLock = lock;
  return user;
}

console.log(userFunc(user, true));
