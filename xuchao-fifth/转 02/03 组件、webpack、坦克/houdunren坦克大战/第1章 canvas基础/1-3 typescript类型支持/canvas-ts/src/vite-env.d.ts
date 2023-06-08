// 此文件用来指定全局类型

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";

interface ModelConstructor {
  new (x: number, y: number): IModel;
}
interface BulletModelConstructor {
  new (tank: IModel): IModel;
}

interface IModel {
  renderModel(): void;
  image(): HTMLImageElement;
  tank?: IModel;
  x: number;
  y: number;
  width: number;
  height: number;
  direction: directionEnum;
}

interface ICanvas {
  model(): ModelConstructor | BulletModelConstructor;
  num(): number;
  ctx: CanvasRenderingContext2D;
  removeCanvas(model: IModel): void;
}
