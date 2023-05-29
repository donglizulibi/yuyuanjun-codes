import "./tankStyle.scss";
import config from "./config.ts";

export default function tank() {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.style.width = config.canvas.width + "px";
  app.style.height = config.canvas.height + "px";
}
