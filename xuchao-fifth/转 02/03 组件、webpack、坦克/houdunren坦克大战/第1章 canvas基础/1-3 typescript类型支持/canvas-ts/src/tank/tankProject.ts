import "./tankStyle.scss";
import config from "./config.ts";
import strawCanvas from "./canvas/straw.ts";
import wallCanvas from "./canvas/wall.ts";
import waterCanvas from "./canvas/water.ts";
import steelCanvas from "./canvas/steel.ts";
import tankCanvas from "./canvas/tank.ts";
import bulletCanvas from "./canvas/bullet.ts";
import bossCanvas from "./canvas/boss.ts";
import playerCanvas from "./canvas/player.ts";

import { promises } from "./service/image.ts";
import music from "./service/music.ts";
console.log(promises);
const app = document.querySelector<HTMLDivElement>("#app")!;
const body = document.querySelector<HTMLBodyElement>("body")!;
app.style.width = config.canvas.width + "px";
app.style.height = config.canvas.height + "px";

export default {
  isStart: false,
  state: 9,
  interve: 0,
  addAudioEle() {
    body.insertAdjacentHTML(
      "afterbegin",
      `<audio src="./src/tank/static/music/blast.wav" id="aBlast"></audio>
    <audio src="./src/tank/static/music/fire.wav" id="aFire"></audio>
    <audio src="./src/tank/static/music/start.wav" id="aStart"></audio>`
    );
  },

  bootstrap() {
    this.addAudioEle();
    app.addEventListener("click", async () => {
      await this.start();
      this.interve = setInterval(() => {
        if (tankCanvas.models.length == 0) this.state = 0;
        if (playerCanvas.models.length == 0 || bossCanvas.models.length == 0) {
          this.state = 1;
        }

        if (this.state != 9) {
          this.stop();
        }
      });
    });
  },

  text() {
    const div = document.createElement('div')
    // const button = document.createElement('button')
    // button.innerHTML = '再来一局'
    // button.addEventListener('click',()=>{
    //   this.isStart = false
    //   this.bootstrap()
    // })

    const el = document.createElement("canvas");
    el.width = config.canvas.width;
    el.height = config.canvas.height;

    const ctx = el.getContext("2d")!;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "80px Kai-Medium-EUC";
    ctx.fillText(
      this.state == 0 ? "恭喜你获得胜利" : "游戏失败",
      config.canvas.width / 2,
      config.canvas.height / 2
    );
    div.appendChild(el)
    // div.appendChild(button)
    app.appendChild(div);
  },

  stop() {
    this.text()
    clearInterval(this.interve);
    tankCanvas.stop();
    bulletCanvas.stop();
    playerCanvas.stop()
  },
  async start() {
    if (this.isStart == true) return;
    music.start();
    this.isStart = true;
    app.style.backgroundImage = "none";
    const all = await Promise.all(promises); // 第一步 加载贴图
    console.log(all);

    strawCanvas.render(); // 第二步 渲染画布

    wallCanvas.render();
    waterCanvas.render();
    steelCanvas.render();

    tankCanvas.render();
    bulletCanvas.render();

    bossCanvas.render();
    playerCanvas.render();
  },
};
