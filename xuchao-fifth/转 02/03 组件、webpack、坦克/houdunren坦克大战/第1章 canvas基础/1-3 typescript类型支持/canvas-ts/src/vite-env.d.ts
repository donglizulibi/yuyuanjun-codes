// 此文件用来指定全局类型

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";

interface BossModelConstructor {
  new (x: number, y: number, height: number, width: number): IModel;
}
interface ModelConstructor {
  new (x: number, y: number): IModel;
  isOver?: boolean;
}
interface BulletModelConstructor {
  new (tank: IModel | undefined): IModel;
}

interface IModel {
  name: string;
  renderModel(): void;
  image(): HTMLImageElement;
  tank?: IModel;
  x: number;
  y: number;
  width: number;
  height: number;
  direction: directionEnum;
  destroy(): void;
  move?(event: KeyboardEvent): void;
  changeDirection?(event: KeyboardEvent): void;
}

interface ICanvas {
  model(): ModelConstructor | BulletModelConstructor | BossModelConstructor;
  num(): number;
  ctx: CanvasRenderingContext2D;
  removeCanvas(model: IModel): void;
  renderModels(): void;
}
