// 抽象类和抽象方法是使用场景如下
// 假如有多个子类需要继承一个父类的方法
// 多个子类中都必须有一个同名的但是不同内容的方法
// 为了使代码更加稳固，可以把父类定义为抽象类，在父类中定义这个名称的抽象方法
// 父类中的抽象方法不用定义方法体，只需要设置返回类型
// 这样子类中就必须设置这个名称的方法，否则会报错，由此形成一种规范
{
    abstract class Animation{
        abstract move():void
        protected getProps():number[]{
            return [1,2,3]
        }
    }

    class Tank extends Animation{
        public move(): void {
            console.log('Tank move')
        }
        protected getProps(): number[] {
            return [2,3,4]
        }
    }

    class Player extends Animation{
        public move(): void {
            console.log('Player move')
        }
    }
}