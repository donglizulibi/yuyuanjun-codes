import canvasAbstract from "./canvasAbstract.ts";
import config from "../config.ts";
import waterModel from "../model/water.ts";

class water extends canvasAbstract {
  constructor() {
    super();
    super.createModel(config.water.num, waterModel);
  }
  render(): void {
    super.renderModels();
  }
}

const waterInstance = new water();
export default waterInstance;
