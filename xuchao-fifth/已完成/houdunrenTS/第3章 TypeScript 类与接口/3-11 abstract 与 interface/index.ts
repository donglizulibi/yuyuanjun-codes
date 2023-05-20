{
  // 抽象类abstract和和接口interface的区别是
  // abstract类中可以定义普通方法，但是接口interface中只能定义属性和方法的规范

  // 定义interface接口的格式是使用interface关键字接上该格式的名称
  // 然后在接上一个对象，里面填入需要规范的属性和方法的名称以及对应的格式

  interface AnimationInterface {
    name: string;
    move(): void;
  }

  // 抽象类中可以只有普通方法
  abstract class Animation {
    protected getProps(): number[] {
      return [1, 2, 3];
    }
  }

  // 调用接口的方式，使用implements关键字
  class Tank extends Animation implements AnimationInterface {
    public name: string = "tank";
    public move(): void {
      console.log("Tank move");
    }
    protected getProps(): number[] {
      return [2, 3, 4];
    }
  }

  class Player extends Animation implements AnimationInterface{
    public name: string = "player";
    public move(): void {
      console.log("Player move");
    }
  }
}
