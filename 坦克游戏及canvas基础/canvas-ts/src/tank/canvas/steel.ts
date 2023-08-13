import canvasAbstract from "./canvasAbstract.ts";
import config from "../config.ts";
import steelModel from "../model/steel.ts";

class steel extends canvasAbstract implements ICanvas {
  name: string = "steel";
  num(): number {
    return config.steel.num;
  }
  model(): ModelConstructor {
    return steelModel;
  }

  render(): void {
    super.createModels();
    super.renderModels();
  }
}

const steelInstance = new steel("steel");
export default steelInstance;
