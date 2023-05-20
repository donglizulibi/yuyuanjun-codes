// 在类中的内置属性，访问器和constructor参数中调用interface接口
interface UserInterface {
  name: string;
  age: number;
  gender: string;
}
class User {
  private _info: UserInterface;
  constructor(info: UserInterface) {
    this._info = info;
  }
  get info(): UserInterface {
    return this._info;
  }
}

const user = new User({name:'houdunren',age:19,gender:'male'})
console.log(user.info)
