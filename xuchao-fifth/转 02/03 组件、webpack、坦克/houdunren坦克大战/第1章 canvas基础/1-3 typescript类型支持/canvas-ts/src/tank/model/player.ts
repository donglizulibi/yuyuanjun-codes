import modelAbstract from "./modelAbstract";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import { modelType } from "../enum/modelType";
import playerApp from "../canvas/player";
import util from "../util";
import config from "../config";
import bulletInstance from "../canvas/bullet";

export default class playerModel extends modelAbstract implements IModel {
  name: string = "player";
  public canvas: ICanvas = playerApp;
  direction: directionEnum = directionEnum.top;
  bindEvent: boolean = false;
  removeEvent = false;
  static isOver = false;
  renderModel(): void {
    super.draw();
    this.isRun();
  }
  isRun() {
    if (this.bindEvent == false) {
      this.bindEvent = true;
      document.addEventListener("keydown", this.changeDirection.bind(this));
      document.addEventListener("keydown", this.move.bind(this));
      document.addEventListener("keydown", this.shoot.bind(this));
    }
  }
  changeDirection(event: KeyboardEvent) {
    if (!playerModel.isOver) {
      switch (event.code) {
        case "ArrowUp":
          this.direction = directionEnum.top;
          break;
        case "ArrowDown":
          this.direction = directionEnum.bottom;
          break;
        case "ArrowLeft":
          this.direction = directionEnum.left;
          break;
        case "ArrowRight":
          this.direction = directionEnum.right;
          break;
      }
      this.canvas.renderModels();
    }
  }

  move(event: KeyboardEvent) {
    if (!playerModel.isOver) {
      let x = this.x;
      let y = this.y;
      let speed = config.player.speed;
      switch (event.code) {
        case "ArrowUp":
          y -= speed;
          break;
        case "ArrowDown":
          y += speed;
          break;
        case "ArrowLeft":
          x -= speed;
          break;
        case "ArrowRight":
          x += speed;
          break;
      }

      if (!util.isModelTouch(x, y) && !util.isCanvasTouch(x, y)) {
        this.x = x;
        this.y = y;
      }
      this.canvas.renderModels();
    }
  }

  shoot(event: KeyboardEvent) {
    if (!playerModel.isOver) {
      if (event.code == "Space") {
        bulletInstance.addPlayerBullet();
      }
    }
  }

  image() {
    const playerDirection =
      "player" +
      this.direction.slice(0, 1).toLocaleUpperCase() +
      this.direction.slice(1);

    return image.get(playerDirection as modelType)!;
  }
}
