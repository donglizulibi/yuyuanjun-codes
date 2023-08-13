import modelAbstract from "./modelAbstract";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import { modelType } from "../enum/modelType";
import tankApp from "../canvas/tank";
import util from "../util";

export default class tankModel extends modelAbstract implements IModel {
  name: string = "tank";
  public canvas: ICanvas = tankApp;
  renderModel(): void {
    if (
      (this.direction == directionEnum.left ||
        this.direction == directionEnum.right) &&
      Math.floor(Math.random() * 3) == 1
    ) {
      this.direction = directionEnum.bottom;
    }
    this.move();
  }

  image() {
    const tankDirection =
      "tank" +
      this.direction.slice(0, 1).toLocaleUpperCase() +
      this.direction.slice(1);
    return image.get(tankDirection as modelType)!;
  }

  move() {
    while (true) {
      let x = this.x;
      let y = this.y;

      switch (this.direction) {
        case directionEnum.top:
          y--;
          break;
        case directionEnum.bottom:
          y++;
          break;
        case directionEnum.left:
          x--;
          break;
        case directionEnum.right:
          x++;
          break;
      }
      if (util.isModelTouch(x, y) || util.isCanvasTouch(x, y)) {
        this.randomDirection();
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }
    super.draw();
  }
}
