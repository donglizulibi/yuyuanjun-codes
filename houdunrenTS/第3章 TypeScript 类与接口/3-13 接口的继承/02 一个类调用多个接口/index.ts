{
  // 如果不想用一个接口来继承另一个接口，可以用一个类来调用多个接口
  interface PlayerEndInterface {
    end(): void;
  }

  interface AnimationInterface {
    name: string;
    move(): void;
  }

  abstract class Animation {
    protected getProps(): number[] {
      return [1, 2, 3];
    }
  }

  class Tank
    extends Animation
    implements AnimationInterface, PlayerEndInterface
  {
    public name: string = "tank";
    public end() {}
    public move(): void {
      console.log("Tank move");
    }
    protected getProps(): number[] {
      return [2, 3, 4];
    }
  }

  class Player
    extends Animation
    implements AnimationInterface, PlayerEndInterface
  {
    public name: string = "player";
    public end() {}
    public move(): void {
      console.log("Player move");
    }
  }
}
