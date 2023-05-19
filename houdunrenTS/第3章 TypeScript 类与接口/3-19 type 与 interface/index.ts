// type可以给值类型限定范围或者类型, 而interface只能规范对象或者方法
type User = "houdunren" | "hdcms";
const user: User = "hdcms";

type State = boolean;
const state: State = false;

// type限定对象格式的时候，引入另外的限定值类型格式的type
type Gender = "male" | "female";
type IsPass = boolean;
type Admin = {
  name: string;
  age?: number;
  gender: Gender;
  isPass: IsPass;
};

const a: Admin = { name: "hdcms", age: 19, gender: "female", isPass: true };
console.log(a);
