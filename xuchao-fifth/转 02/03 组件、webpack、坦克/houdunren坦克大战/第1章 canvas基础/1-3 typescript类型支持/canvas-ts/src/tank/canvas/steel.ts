import canvasAbstract from "./canvasAbstract.ts";
import config from "../config.ts";
import wallModel from "../model/wall.ts";
import steelModel from "../model/steel.ts";

class steel extends canvasAbstract {
  constructor() {
      super();
      super.createModel(config.wall.num, steelModel);
  }
  render(): void {
    super.renderModels()
  }
}

const steelInstance = new steel();
export default steelInstance;
