import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/straw.ts";

class straw extends canvasAbstract {
  constructor() {
    super();
  }
  render(): void {
    this.drawModels(config.straw.num, model);
  }
}

const strawApp = new straw();
console.log(strawApp);
export default strawApp;
