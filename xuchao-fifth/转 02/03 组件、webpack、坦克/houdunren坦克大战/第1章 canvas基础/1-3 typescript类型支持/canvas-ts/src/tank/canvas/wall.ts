import canvasAbstract from "./canvasAbstract";
import config from "../config";
import wallModel from "../model/wall.ts";

class wall extends canvasAbstract implements ICanvas {
  name: string = "wall";
  num(): number {
    return config.wall.num;
  }
  model(): ModelConstructor {
    return wallModel;
  }

  render(): void {
    super.createModels();
    super.renderModels();
  }
}

const wallInstance = new wall("wall");
export default wallInstance;
