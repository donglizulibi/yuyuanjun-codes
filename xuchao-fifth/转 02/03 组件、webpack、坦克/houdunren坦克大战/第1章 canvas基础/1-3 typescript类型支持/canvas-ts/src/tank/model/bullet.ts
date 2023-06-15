import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import bulletInstance from "../canvas/bullet";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";
import wallInstance from "../canvas/wall";
import steelInstance from "../canvas/steel";
import bossInstance from "../canvas/boss";
import tankApp from "../canvas/tank";
import playerApp from "../canvas/player";

export default class bulletModel extends modelAbstract implements IModel {
  name: string = "bullet";
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
    let x = this.x;
    let y = this.y;
    let speed = this.tank.name == "player" ? 4 : 1;
    // console.log(this.tank)
    switch (this.direction) {
      case directionEnum.top:
        y -= speed;
        break;
      case directionEnum.right:
        x += speed;
        break;
      case directionEnum.bottom:
        y += speed;
        break;
      case directionEnum.left:
        x -= speed;
        break;
    }
    const touchModel = util.isModelTouch(
      x,
      y,
      config.bullet.width,
      config.bullet.height,
      [
        ...wallInstance.models,
        ...steelInstance.models,
        ...bossInstance.models,
        ...tankApp.models,
        ...playerApp.models,
      ]
    );


    if (util.isCanvasTouch(x, y, config.bullet.width, config.bullet.height)) {
      this.destroy();
    } else if (touchModel && touchModel.name !== this.tank.name) {
      this.destroy();
      if (touchModel.name !== "steel") {
        touchModel.destroy();
      }
      this.blash(touchModel);
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
