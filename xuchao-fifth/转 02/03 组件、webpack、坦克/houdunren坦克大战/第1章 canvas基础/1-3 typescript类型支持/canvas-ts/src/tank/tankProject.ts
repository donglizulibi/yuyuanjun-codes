import "./tankStyle.scss";
import config from "./config.ts";
import straw from "./canvas/straw.ts";
// import "./canvas/tank.ts"

// import { image } from "./service/image.ts";

import { promises } from "./service/image.ts";
console.log(promises);

export default function tankProject() {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.style.width = config.canvas.width + "px";
  app.style.height = config.canvas.height + "px";

  async function bootstrap() {
    const all = await Promise.all(promises) // 第一步 加载贴图
    console.log(all)

    straw.render() // 第二步 渲染画布
  }
  //   console.log(image)
  //   console.log(image.get('straw'))

  bootstrap();



}
