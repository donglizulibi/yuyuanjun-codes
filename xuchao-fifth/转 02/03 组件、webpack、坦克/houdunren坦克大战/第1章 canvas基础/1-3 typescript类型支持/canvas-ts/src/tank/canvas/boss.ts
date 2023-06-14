import canvasAbstract from "./canvasAbstract.ts";
import config from "../config.ts";
import bossModel from "../model/boss.ts";

class boss extends canvasAbstract implements ICanvas {
  name: string = "boss";
  num(): number {
    return 1;
  }
  model(): ModelConstructor {
    return bossModel;
  }

  render(): void {
    super.createModels();

    super.renderModels();
  }


}

const wallInstance = new boss("wall");
export default wallInstance;
