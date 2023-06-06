import modelAbstract from "./modelAbstract";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import { modelType } from "../enum/modelType";
import config from "../config";

export default class tankModel extends modelAbstract implements IModel {
  renderModel(): void {
    this.move();
  }

  image() {
    const tankDirection =
      "tank" +
      this.direction.slice(0, 1).toLocaleUpperCase() +
      this.direction.slice(1);
    return image.get(tankDirection as modelType)!;
  }

  protected move() {
    while (true) {
        // console.log(1)
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
      if (this.isTouch(x, y) === true) {
        this.randomDirection();
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }
    super.draw();
  }

  isTouch(x: number, y: number) {
    if (
      x <= 0 ||
      x + this.width > config.canvas.width ||
      y <= 0 ||
      y + this.height > config.canvas.height
    ) {
      return true;
    }
  }
}
