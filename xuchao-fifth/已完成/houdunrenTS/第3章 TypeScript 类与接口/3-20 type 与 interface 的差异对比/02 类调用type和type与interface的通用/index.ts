// type定义的规范，也可以被类以implements的方式调用
type User = {
  name: string;
  age: number;
};

class Hd implements User {
  public name: string = "houdunren";
  public age: number = 19;
}
console.log(new Hd());

// type和interface的通用
type Name = {
  name: string;
};
interface Age {
  age: number;
}
type Person = Name & Age;
const hd: Person = { name: "houdunren", age: 19 };
console.log(hd)