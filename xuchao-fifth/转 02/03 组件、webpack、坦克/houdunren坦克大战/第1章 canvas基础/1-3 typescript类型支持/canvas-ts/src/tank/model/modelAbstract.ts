import { image } from "../service/image";
import config from "../config";
type modelParam = keyof typeof config.images;
export default abstract class modelAbstract {
  // 在这里定义一个抽象方法render，则往后的子类都需要有render方法
  // 每一层画布都需要有加载图片这个动作，如果还有其他的特性动作，可以放在render方法里

  abstract renderModel(): void;
  constructor(
    protected canvas: CanvasRenderingContext2D,
    protected x: number,
    protected y: number
  ) {}

  
  protected draw(model: modelParam) {
    // console.log(model)
    this.canvas.drawImage(
      image.get(model) as HTMLImageElement,
      this.x,
      this.y,
      config.model.width,
      config.model.height
    );
  }
}
