import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import wallInstance from "../canvas/wall";

export default class wallModel extends modelAbstract implements IModel {
  name: string = "wall";
  public canvas: ICanvas = wallInstance;
  image(): HTMLImageElement {
    return image.get("wall")!;
  }
  renderModel(): void {
    this.draw();
  }
}
