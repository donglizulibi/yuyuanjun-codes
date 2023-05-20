{
  // 将枚举、接口和数组结合
  // 接口是定义一种规范的格式，而枚举是定义某一个值的选项列表
  enum genderType {
    BOY,
    GIRL,
  }
  interface UserInterface {
    name: string;
    age: number;
    gender: genderType;
  }

  const user1: UserInterface = {
    name: "houdunren",
    age: 19,
    gender: genderType.BOY,
  };

  const user2: UserInterface = {
    name: "hdcms",
    age: 18,
    gender: genderType.GIRL,
  };

  const userArr: UserInterface[] = [user1, user2];
  console.log(userArr);
}
