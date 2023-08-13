import canvasAbstract from "./canvasAbstract";
import playerModel from "../model/player";
import config from "../config";

class player extends canvasAbstract implements ICanvas {
  name: string = "player";
  num(): number {
    return 1;
  }
  model(): ModelConstructor {
    return playerModel;
  }
  render() {
    this.createModels();
    super.renderModels();
  }

  stop() {
    this.model().isOver = true;
  }

  createInstance() {
    const mw = config.model.width;
    const mh = config.model.height;
    const cw = config.canvas.width;
    const ch = config.canvas.height;
    const model = this.model() as ModelConstructor;
    const position = { x: cw / 2 + mw * 4, y: ch - mh };
    const instance = new model(position.x, position.y);
    return instance;
  }
  createModels() {
    this.models.push(this.createInstance());
  }
}

const playerApp = new player("player");
export default playerApp;
