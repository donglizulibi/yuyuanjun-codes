import canvasAbstract from "./canvasAbstract";
import config from "../config";
import strawModel from "../model/straw.ts";

class straw extends canvasAbstract {
  constructor() {
    super();
    super.createModel(config.straw.num, strawModel);
  }
  render(): void {
    super.renderModels()
  }
}

const strawInstance= new straw();
// console.log(strawInstance);
export default strawInstance;
