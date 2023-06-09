import "./tankStyle.scss";
import config from "./config.ts";
import strawCanvas from "./canvas/straw.ts";
import wallCanvas from "./canvas/wall.ts"
import waterCanvas from "./canvas/water.ts"
import steelCanvas from "./canvas/steel.ts"
import tankCanvas from "./canvas/tank.ts"
import bulletCanvas from "./canvas/bullet.ts";


import { promises } from "./service/image.ts";
console.log(promises);

export default function tankProject() {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.style.width = config.canvas.width + "px";
  app.style.height = config.canvas.height + "px";

  async function bootstrap() {
    const all = await Promise.all(promises) // 第一步 加载贴图
    console.log(all)

    strawCanvas.render() // 第二步 渲染画布

    wallCanvas.render()
    waterCanvas.render()
    steelCanvas.render()


    tankCanvas.render()
    bulletCanvas.render()
  }

  bootstrap();



}
