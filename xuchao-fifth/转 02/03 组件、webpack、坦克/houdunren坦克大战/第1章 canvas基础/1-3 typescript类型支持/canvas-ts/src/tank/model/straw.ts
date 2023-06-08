import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import strawInstance from "../canvas/straw";

export default class strawModel extends modelAbstract implements IModel {
  public canvas: ICanvas = strawInstance;
  image(): HTMLImageElement {
    return image.get("straw")!;
  }
  renderModel(): void {
    this.draw();
  }
}
