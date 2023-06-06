import { directionEnum } from "../enum/directionEnum";
import config from "../config";
export default abstract class modelAbstract {
  // 在这里定义一个抽象方法render，则往后的子类都需要有render方法
  // 每一层画布都需要有加载图片这个动作，如果还有其他的特性动作，可以放在render方法里
  protected direction: directionEnum = directionEnum.top;
  abstract renderModel(): void;
  constructor(
    public canvas: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    protected width = config.model.width,
    protected height = config.model.height
  ) {
    this.randomDirection();
  }

  protected randomDirection() {
    const randomNum = Math.floor(Math.random() * 4);
    this.direction = Object.keys(directionEnum)[randomNum] as directionEnum;
  }

  public abstract image(): HTMLImageElement;

  protected draw(){
    
      this.canvas.drawImage(
        this.image(),
        this.x,
        this.y,
        config.model.height,
        config.model.width
      );
   
  }
}
