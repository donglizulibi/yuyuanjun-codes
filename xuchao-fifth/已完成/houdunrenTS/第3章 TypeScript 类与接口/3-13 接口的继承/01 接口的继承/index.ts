{
  // 在本例中的两个类中都需要有关于结束的方法，则这个方法可以在外部再定义一个接口
  // 这个新定义的接口还可以被其他的、不需要调用动画接口的类，来调用
  // 所以可以用动画接口来继承结束接口
  // 继承接口使用关键字extends
  interface PlayerEndInterface{
    end():void
  }

  interface AnimationInterface extends PlayerEndInterface {
    name: string;
    move(): void;
  }

  abstract class Animation {
    protected getProps(): number[] {
      return [1, 2, 3];
    }
  }

  class Tank extends Animation implements AnimationInterface {
    public name: string = "tank";
    public move(): void {
      console.log("Tank move");
    }
    protected getProps(): number[] {
      return [2, 3, 4];
    }
    public end(){}
  }
  
  class Player extends Animation implements AnimationInterface{
    public name: string = "player";
    public move(): void {
      console.log("Player move");
    }
    public end(){}
  }
}
