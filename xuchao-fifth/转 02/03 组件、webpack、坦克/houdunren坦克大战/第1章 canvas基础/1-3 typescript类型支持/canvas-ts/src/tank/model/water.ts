import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
export default class waterModel extends modelAbstract implements IModel {
  image(): HTMLImageElement {
    return image.get("water")!;
  }
  renderModel(): void {
    this.draw()
  }
}
