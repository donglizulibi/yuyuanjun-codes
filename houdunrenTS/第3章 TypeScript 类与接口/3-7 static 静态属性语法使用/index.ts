// 类的静态属性和静态方法只能通过类本身来调用
class User{
    static site = 'houdunren'
    public static getSite(){
        return User.site
    }
}

console.log(User.site)
console.log(User.getSite())