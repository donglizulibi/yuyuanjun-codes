import "./tankStyle.scss";
import config from "./config.ts";
import "./canvas/straw.ts"
import "./canvas/tank.ts"

export default function tankProject() {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.style.width = config.canvas.width + "px";
  app.style.height = config.canvas.height + "px";
}
