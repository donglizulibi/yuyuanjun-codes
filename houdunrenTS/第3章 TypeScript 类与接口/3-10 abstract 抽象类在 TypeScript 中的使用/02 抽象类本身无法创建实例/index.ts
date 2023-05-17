{
  abstract class Animation {
    public abstract name: string;
    abstract move(): void;
    protected getProps(): number[] {
      return [1, 2, 3];
    }
  }

  class Tank extends Animation {
    public name: string = "tank";
    public move(): void {
      console.log("Tank move");
    }
    protected getProps(): number[] {
      return [2, 3, 4];
    }
  }

  class Player extends Animation {
    public name: string = "player";
    public move(): void {
      console.log("Player move");
    }
  }
  // 抽象类仅仅是作为一种规范存在，其本身无法创建实例
  // new Animation()

  // 抽象属性与抽象方法类同
}
