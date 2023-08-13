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
    this.createBossWall();
    super.renderModels();
  }

  protected createBossWall() {
    const mw = config.model.width;
    const mh = config.model.height;
    const cw = config.canvas.width;
    const ch = config.canvas.height;

    const positions = [
      { x: cw / 2 - mw * 2, y: ch - mh },
      { x: cw / 2 - mw * 2, y: ch - mh * 2 },
      { x: cw / 2 - mw * 2, y: ch - mh * 3 },
      { x: cw / 2 - mw * 2, y: ch - mh * 4 },
      { x: cw / 2 - mw * 1, y: ch - mh * 4 },
      { x: cw / 2 , y: ch - mh * 4 },
      { x: cw / 2 + mw * 1, y: ch - mh * 4 },
      { x: cw / 2 + mw * 2, y: ch - mh * 4 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 2 },
      { x: cw / 2 + mw * 2, y: ch - mh * 1 },
    ];

    positions.forEach((pos) => {
      const model = this.model();
      const instance = new model(pos.x, pos.y);
      this.models.push(instance);
    });

    // });
    // console.log(this.models)
  }
}

const wallInstance = new wall("wall");
export default wallInstance;
