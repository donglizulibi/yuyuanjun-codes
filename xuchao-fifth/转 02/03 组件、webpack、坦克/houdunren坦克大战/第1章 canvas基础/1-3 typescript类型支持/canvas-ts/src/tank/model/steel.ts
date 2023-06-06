import modelAbstract from "./modelAbstract";
import { image } from "../service/image";

export default class steelModel extends modelAbstract implements IModel {
  image(): HTMLImageElement {
    return image.get("steel")!;
  }
  renderModel(): void {
    this.draw()
  }
}
