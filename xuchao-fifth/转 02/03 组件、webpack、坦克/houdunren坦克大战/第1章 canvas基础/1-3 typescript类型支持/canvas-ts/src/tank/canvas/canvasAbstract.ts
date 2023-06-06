import config from "../config";
import position from "../service/position";

export default abstract class canvasAbstract {
  protected models: IModel[] = [];
  protected abstract num(): number;
  protected abstract model(): ModelConstructor;

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

  // 某些模型, 比如坦克需要不断渲染, 所以在这里模型的创建和渲染需要分开
  // 避免会不断创建实例
  protected createModels() {
    // console.log(model)
    position.positionCollection(this.num()).forEach((position) => {
      // console.log(this.model())
      const model = this.model();
      const instance = new model(this.canvas, position.x, position.y);
      this.models.push(instance);
      // console.log(instance)
    });
    // console.log(this.models);
  }

  protected renderModels() {
    // console.log(123)
    this.models.forEach((model) => {
      model.renderModel()
      // this.canvas.drawImage(
      //   model.image(),
      //   model.x,
      //   model.y,
      //   config.model.height,
      //   config.model.width
      // );
    });
  }

  // 把这两个position相关的方法放到service中
}
