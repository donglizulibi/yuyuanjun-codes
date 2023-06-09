import canvasAbstract from "./canvasAbstract";
import tankModel from "../model/tank";
import config from "../config";
import position from "../service/position";

class tank extends canvasAbstract implements ICanvas {
  name: string = "tank";
  num(): number {
    return config.tank.num;
  }
  model(): ModelConstructor {
    return tankModel;
  }
  render() {
    this.createModels();
    setInterval(() => {
      super.renderModels();
    }, config.tank.speed);
  }

  // public renderModels(): void {
  //   this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
  //   super.renderModels();
  // }
  createModels() {
    new Array(this.num()).fill("").forEach(() => {
      const pos = position.position();
      const model = this.model();
      const Yposition = Math.floor(Math.random() * 2) * 30;
      const instance = new model(pos.x, Yposition);
      this.models.push(instance);
    });
  }

  // 坦克的生成需要都出现在画布上方的空白处，且可以重复，所以createModels方法需要重写
}

const tankApp = new tank("tank");
console.log(tankApp);
export default tankApp;
