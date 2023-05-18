// interface接口可以用来定义一个对象的类型接口
// 如果对象中有某个属性是可有可无的，则可以在属性名后面加上问号
// 如果对象中有某个，或某些属性不能预知其属性名
// 可以放在[]里面，用key指代，但是也要给key限制类型
interface UserInterface {
  name: string;
  age?: number;
  [key: string]: any;
  info: (a: string, b: number) => (string | number)[];
}

let obj: UserInterface = {
  name: "houdunren",
  //   age: 18,
  gender: "male",
  nation: "uk",
  info(a: string, b: number) {
    return [a, b];
  },
};
