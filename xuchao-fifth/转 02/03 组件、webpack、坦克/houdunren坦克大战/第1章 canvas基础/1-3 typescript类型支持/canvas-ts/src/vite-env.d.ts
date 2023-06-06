// 此文件用来指定全局类型

declare module "*.png";
declare module "*.gif";

interface ModelConstructor {
  new (canvas: CanvasRenderingContext2D, x: number, y: number): IModel;
}

interface IModel {
  renderModel(): void;
  image(): HTMLImageElement;
  x: number;
  y: number;
}

interface ICanvas {
  model(): ModelConstructor;
  num(): number;
}
