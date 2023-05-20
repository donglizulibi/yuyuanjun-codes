// 在类中使用泛型
class Collection<T> {
  data: T[] = [];
  public push(...args: T[]): void {
    this.data.push(...args);
  }

  // 为防止data为空的时候，出现返回值为undefined，从而不符合返回值为泛函T的情况
  // 可以对返回值进行非空断言，或者把undefined的情况考虑进去
  //   public shift(): T {
  //     return this.data.shift()!;
  //   }
  // 或者
  public shift(): T | undefined {
    return this.data.shift();
  }
}

// 传入数值
const collectionNumber = new Collection<number>();
collectionNumber.push(1, 2, 3, 4);
console.log(collectionNumber.shift());

// 传入字符串
const collectionString = new Collection<string>();
collectionString.push("a", "b", "c", "d");
console.log(collectionString.shift());

// 传入自定义类型的数据
type User = { name: string; age: number };
const user1: User = { name: "houdunren", age: 19 };
const user2: User = { name: "hdcms", age: 20 };
const collectionUser = new Collection<User>();
collectionUser.push(user1, user2);
console.log(collectionUser.shift());
