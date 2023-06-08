import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import wallInstance from "../canvas/wall";
export default class waterModel extends modelAbstract implements IModel {
  public canvas: ICanvas = wallInstance;
  image(): HTMLImageElement {
    return image.get("water")!;
  }
  renderModel(): void {
    this.draw();
  }
}
