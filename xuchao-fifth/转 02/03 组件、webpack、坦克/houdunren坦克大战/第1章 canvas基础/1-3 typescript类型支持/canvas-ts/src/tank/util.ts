import config from "./config";
import wallInstance from "./canvas/wall";
import waterInstance from "./canvas/water";
import steelInstance from "./canvas/steel";
export default {
  isCanvasTouch(
    x: number,
    y: number,
    width: number = config.model.width,
    height: number = config.model.height
  ) {
    if (
      x < 0 ||
      x + width > config.canvas.width ||
      y < 0 ||
      y + height > config.canvas.height
    ) {
      return true;
    } else {
      return false;
    }
  },
  isModelTouch(
    x: number,
    y: number,
    width: number = config.model.width,
    height: number = config.model.height,
    models: IModel[] = [
      ...waterInstance.models,
      ...wallInstance.models,
      ...steelInstance.models,
    ]
  ): IModel | undefined {
    // console.log(models)
    const TouchModel = models.find((model) => {
      // console.log(model)
      const state =
        x + width <= model.x ||
        x >= model.x + model.width ||
        y >= model.y + model.height ||
        y + height <= model.y;

      return !state;
    });
    return TouchModel;
  },
};
