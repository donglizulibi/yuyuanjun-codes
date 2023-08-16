import config from "../config";
import position from "../service/position";

export default abstract class canvasAbstract {
  // abstract name: string;
  protected abstract num(): number;
  protected abstract model(): ModelConstructor | BulletModelConstructor | BossModelConstructor;
  public models: IModel[] = [];
  
  constructor(
    public name: string,
    protected app = document.querySelector<HTMLDivElement>("#app")!,
    protected el = document.createElement("canvas"),
    public ctx = el.getContext("2d")!
  ) {
    this.createCanvas();
  }

  abstract render(): void;
  public removeCanvas(model: IModel) {
    // console.log(this.models)
    const arr = this.models.filter((item) => item != model);
    this.models = arr;
    // console.log(this.models)

  }
  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement("afterbegin", this.el);
    this.el.setAttribute("name", this.name);
  }

  // 某些模型, 比如坦克需要不断渲染, 所以在这里模型的创建和渲染需要分开
  // 避免会不断创建实例
  protected createModels() {
    // console.log(model)
    position.positionCollection(this.num()).forEach((position) => {
      // console.log(this.model())
      const model = this.model() as ModelConstructor;
      const instance = new model(position.x, position.y);
      this.models.push(instance);
      // console.log(instance)
    });
    // console.log(this.models);
  }

  public renderModels() {
    // console.log(this)
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    this.models.forEach((model) => {
      model.renderModel();
    });
  }
}
