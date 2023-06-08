import canvasAbstract from "./canvasAbstract.ts";
import config from "../config.ts";
import waterModel from "../model/water.ts";

class water extends canvasAbstract implements ICanvas {
  name: string = "water";
  num(): number {
    return config.water.num;
  }
  model(): ModelConstructor {
    return waterModel;
  }

  render(): void {
    super.createModels();
    super.renderModels();
  }
}

const waterInstance = new water("water");
export default waterInstance;
