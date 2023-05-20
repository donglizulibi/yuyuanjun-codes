{
  //   class User<T> {
  //     private data: T;
  //     constructor(data: T) {
  //       this.data = data;
  //     }
  //     public get(): T {
  //       return this.data;
  //     }
  //   }
  // 等同于
  class User<T> {
    constructor(private data: T) {}
    public get(): T {
      return this.data;
    }
  }

  interface UserInterface {
    name: string;
    age: number;
  }
  const user1 = new User<UserInterface>({ name: "houdunren", age: 19 });

  // const user2= new User<UserInterface>(123)
  console.log(user1.get());
}
