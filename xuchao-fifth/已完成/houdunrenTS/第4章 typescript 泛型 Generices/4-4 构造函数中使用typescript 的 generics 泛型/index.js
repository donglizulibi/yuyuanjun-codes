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
    var User = /** @class */ (function () {
        function User(data) {
            this.data = data;
        }
        User.prototype.get = function () {
            return this.data;
        };
        return User;
    }());
    var user1 = new User({ name: "houdunren", age: 19 });
    // const user2= new User<UserInterface>(123)
    console.log(user1.get());
}
