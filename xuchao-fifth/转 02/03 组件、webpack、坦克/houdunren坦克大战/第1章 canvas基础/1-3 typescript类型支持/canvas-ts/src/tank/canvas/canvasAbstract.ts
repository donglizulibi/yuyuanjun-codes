import config from "../config";
import { image } from "../service/image";
import imgUrl from "../static/images/straw/straw.png";

export default abstract class canvasAbstract {
  constructor(
    protected app = document.querySelector<HTMLDivElement>("#app")!,
    protected el = document.createElement("canvas"),
    protected canvas = el.getContext("2d")!
  ) {
    this.createCanvas();
  }

  abstract render(): void;
  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement("afterbegin", this.el);
  }

  protected drawModels(num: number) {
    console.log(this.positionCollection(num));
    for (let i = 0; i < num; i++) {
      const position = this.positionCollection(num)[i];
      //   const position = this.position();
      this.canvas.drawImage(
        image.get("straw")!,
        position.x,
        position.y,
        config.model.width,
        config.model.height
      );
    }
  }

  // 另外建一个方法，删去随机坐标中的重复项
  protected positionCollection(num: number) {
    // const collection = <{ x: number; y: number }[]>[];
    const collection = [] as { x: number; y: number }[];
    let count = 1;
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position();
        const state = collection.some((item) => {
          if (item.x == position.x && item.y == position.y) {
            return true;
          }
        });

        if (state) {
          count++;
        }
        if (!state) {
          collection.push(position);
          break;
        }
      }
    }

    console.log(count);
    return collection;
  }
  protected position() {
    return {
      x:
        Math.floor(Math.random() * (config.canvas.width / config.model.width)) *
        config.model.width,
      y:
        Math.floor(
          Math.random() * (config.canvas.height / config.model.height)
        ) * config.model.height,
    };
  }
}
