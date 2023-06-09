import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import waterInstance from "../canvas/water";
export default class waterModel extends modelAbstract implements IModel {
  name: string = "water";
  public canvas: ICanvas = waterInstance;
  image(): HTMLImageElement {
    return image.get("water")!;
  }
  renderModel(): void {
    this.draw();
  }
}
