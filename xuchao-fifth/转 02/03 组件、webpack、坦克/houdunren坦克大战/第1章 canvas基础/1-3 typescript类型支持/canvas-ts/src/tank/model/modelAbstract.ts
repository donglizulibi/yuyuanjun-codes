import { directionEnum } from "../enum/directionEnum";
import config from "../config";
// import blash0 from "../static/images/blasts/blast0.gif";
// import blash1 from "../static/images/blasts/blast1.gif";
// import blash2 from "../static/images/blasts/blast2.gif";
// import blash3 from "../static/images/blasts/blast3.gif";
// import blash4 from "../static/images/blasts/blast4.gif";
// import blash5 from "../static/images/blasts/blast5.gif";
// import blash6 from "../static/images/blasts/blast6.gif";
import blash from "../static/images/blasts/blast7.gif";
export default abstract class modelAbstract {
  // 在这里定义一个抽象方法render，则往后的子类都需要有render方法
  // 每一层画布都需要有加载图片这个动作，如果还有其他的特性动作，可以放在render方法里
  public direction: directionEnum = directionEnum.top;
  abstract renderModel(): void;
  public abstract canvas: ICanvas;
  public abstract name: string;
  constructor(
    public x: number,
    public y: number,
    public width = config.model.width,
    public height = config.model.height
  ) {
    this.randomDirection();
  }

  protected randomDirection() {
    const randomNum = Math.floor(Math.random() * 4);
    // console.log(directionEnum)
    // const arr = [...Object.keys(directionEnum), "bottom", "bottom"];
    // console.log(arr);
    this.direction = Object.keys(directionEnum)[randomNum] as directionEnum;
    // this.direction = arr[randomNum] as directionEnum;
  }

  public abstract image(): HTMLImageElement;

  protected steelBlash(model:IModel) {
    let x = model.x;
    let y = model.y;
    const distance = 10
    switch (this.direction) {
      case directionEnum.top:
        y += distance;
        break;
      case directionEnum.bottom:
        y -= distance;
        break;
      case directionEnum.left:
        x += distance;
        break;
      case directionEnum.right:
        x -= distance;
        break;
    }
    return { x, y };
  }
  protected blash(model: IModel) {
    const steelPosition = this.steelBlash(model);
    const wallPosition = {
      x: model.x,
      y: model.y,
    };
    let modelVal: { x: number; y: number };
    if (model.name == "steel") {
      modelVal = steelPosition;
    } else {
      modelVal = wallPosition;
    }
    setTimeout(() => {
      const img = new Image();
      img.src = blash;
      img.onload = () => {
        this.canvas.ctx.drawImage(
          img,
          modelVal.x,
          modelVal.y,
          model.width,
          model.height
        );
      };
    }, 100);
  }
  protected draw() {
    this.canvas.ctx.drawImage(
      this.image(),
      this.x,
      this.y,
      config.model.height,
      config.model.width
    );
  }
  public destroy() {
    // console.log(this.canvas)
    // console.log(this)
    // this.blash()
    this.canvas.removeCanvas(this);
    this.canvas.renderModels();
  }
}
