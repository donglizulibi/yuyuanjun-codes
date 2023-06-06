import modelAbstract from "./modelAbstract";
import { image } from "../service/image";

export default class strawModel extends modelAbstract implements IModel {
  image(): HTMLImageElement {
    return image.get("straw")!;
  }
  renderModel(): void {
    this.draw()
  }
}
