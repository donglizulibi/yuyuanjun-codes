import canvasAbstract from "./canvasAbstract";
import config from "../config";
import wallModel from "../model/wall.ts";

class wall extends canvasAbstract {
  constructor() {
      super();
      super.createModel(config.wall.num, wallModel);
  }
  render(): void {
    super.renderModels()
  }
}

const wallInstance = new wall();
export default wallInstance;
