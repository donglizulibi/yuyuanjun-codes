import canvasAbstract from "./canvasAbstract";
import config from "../config";
import strawModel from "../model/straw.ts";

class straw extends canvasAbstract implements ICanvas {
  name: string = "straw";
  num(): number {
    return config.straw.num;
  }
  model(): ModelConstructor {
    return strawModel;
  }

  render(): void {
    super.createModels();
    super.renderModels();
  }
}

const strawInstance = new straw("straw");
// console.log(strawInstance);
export default strawInstance;
