import config from "../config";

export default abstract class canvasAbstract {
  constructor(
    protected app = document.querySelector<HTMLDivElement>("#app")!,
    protected el = document.createElement("canvas"),
    protected canvas = el.getContext("2d")!,
    protected count = 0
  ) {
    this.createCanvas();
  }

  abstract render(): void;
  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement("afterbegin", this.el);
  }

  protected drawModels(num: number, model: any) {
    this.positionCollection(num).forEach(
      (position) => new model(this.canvas, position.x, position.y)
    );

    console.log(this.count);
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

  protected positionCollection(num: number) {
    type colletionInterface = { x: number; y: number }[];
    const colletion = [] as colletionInterface;
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position();
        const state = colletion.some((item) => {
          return item.x == position.x && item.y == position.y;
        });

        if (state) {
          this.count++;
        }
        if (!state) {
          colletion.push(position);
          break;
        }
      }
    }
    return colletion;
  }
}
