import modelAbstract from "./modelAbstract";
import { image } from "../service/image";

export default class wallModel extends modelAbstract implements IModel {
  image(): HTMLImageElement {
    return image.get("wall")!;
  }
  renderModel(): void {
    this.draw()
  }
}
