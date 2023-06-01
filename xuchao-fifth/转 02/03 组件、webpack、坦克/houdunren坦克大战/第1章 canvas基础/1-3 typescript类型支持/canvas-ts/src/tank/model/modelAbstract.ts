import { image } from "../service/image";
import config from "../config";
export default abstract class modelAbstract {
  constructor(
    protected canvas: CanvasRenderingContext2D,
    protected x: number,
    protected y: number
  ) {
    canvas.drawImage(
      image.get("straw") as HTMLImageElement,
      x,
      y,
      config.model.width,
      config.model.height
    );
  }
}
