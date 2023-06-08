import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import bulletInstance from "../canvas/bullet";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";

export default class bulletModel extends modelAbstract implements IModel {
  public canvas: ICanvas = bulletInstance;
  constructor(public tank: IModel) {
    super(
      tank.x + config.model.width / 2 - config.bullet.width / 2,
      tank.y + config.model.height / 2 - config.bullet.height / 2
    );
    this.direction = tank.direction;
  }
  image(): HTMLImageElement {
    return image.get("bullet")!;
  }
  renderModel(): void {
    // console.log(123)
    // console.log(this.x)

    // console.log(this.direction);
    let x = this.x;
    let y = this.y;
    switch (this.direction) {
      case directionEnum.top:
        y -= 2;
        break;
      case directionEnum.right:
        x += 2;
        break;
      case directionEnum.bottom:
        y += 2;
        break;
      case directionEnum.left:
        x -= 2;
        break;
    }
    if (util.isCanvasTouch(x, y, config.bullet.width, config.bullet.height)) {
      this.destroy();
    } else {
      this.x = x;
      this.y = y;
      this.draw();
    }
  }

  protected draw() {
    this.canvas.ctx.drawImage(
      this.image(),
      this.x,
      this.y,
      config.bullet.width,
      config.bullet.height
    );
  }
}
