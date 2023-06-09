import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import steelInstance from "../canvas/steel";

export default class steelModel extends modelAbstract implements IModel {
  name: string = "steel";
  public canvas: ICanvas = steelInstance;
  image(): HTMLImageElement {
    return image.get("steel")!;
  }
  renderModel(): void {
    this.draw();
  }
}
