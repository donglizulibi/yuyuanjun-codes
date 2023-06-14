import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import bossInstance from "../canvas/boss";

export default class bossModel extends modelAbstract implements IModel {
  name: string = "boss";
  public canvas: ICanvas = bossInstance;
  image(): HTMLImageElement {
    return image.get("boss")!;
  }
  renderModel(): void {
    this.draw();
  }
}
