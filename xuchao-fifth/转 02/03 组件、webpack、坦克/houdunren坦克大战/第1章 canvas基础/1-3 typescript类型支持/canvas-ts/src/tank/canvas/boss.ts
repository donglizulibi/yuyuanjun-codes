import canvasAbstract from "./canvasAbstract.ts";
import config from "../config.ts";
import bossModel from "../model/boss.ts";

class boss extends canvasAbstract implements ICanvas {
  name: string = "boss";
  num(): number {
    return 0;
  }
  model(): BossModelConstructor {
    return bossModel;
  }

  render(): void {
    this.createModels();
    super.renderModels();
  }

  createModels() {
    const model = this.model();
    const instance = new model(
      config.canvas.width / 2 - config.model.width,
      config.canvas.height - config.model.height * 3,
      config.model.height * 3,
      config.model.width * 3
    );

    this.models.push(instance);
  }
}

const wallInstance = new boss("wall");
export default wallInstance;
