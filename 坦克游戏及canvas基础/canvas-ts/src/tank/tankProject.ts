import "./tankStyle.scss";
// 将各层画布导入
import config from "./config.ts";
import strawCanvas from "./canvas/straw.ts";
import wallCanvas from "./canvas/wall.ts";
import waterCanvas from "./canvas/water.ts";
import steelCanvas from "./canvas/steel.ts";
import tankCanvas from "./canvas/tank.ts";
import bulletCanvas from "./canvas/bullet.ts";
import bossCanvas from "./canvas/boss.ts";
import playerCanvas from "./canvas/player.ts";

// 
import { promises } from "./service/image.ts";
import music from "./service/music.ts";

const app = document.querySelector<HTMLDivElement>("#app")!;
const body = document.querySelector<HTMLBodyElement>("body")!;
app.style.width = config.canvas.width + "px";
app.style.height = config.canvas.height + "px";

export default {
  isStart: false,  
    // 为防止在点击开始之后，再次点击页面中央会不断开始游戏
    // 设置一个判断是否开始的变量
  state: 9,
    // 设置一个游戏是否结束的判断值，如果为9，则未结束
    // 如果为0则表示获胜，如果为1则表示游戏失败
  interve: 0,
    // 设置一个定时器变量，在这个定时器中不断地去判断state的值
    // 如果state不为9，则游戏结束，调用一个控制游戏结束的函数stop
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

  // text函数在游戏结束、调用stop函数的时候调用
  // 用来显示游戏结果的文字
  text() {
    // 先创建一个div元素和一个canvas元素
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

    // 将canvas元素设置为2d实例，设置字体和字体显示位置
    const ctx = el.getContext("2d")!;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "80px Kai-Medium-EUC";

    // 根据游戏结束的状态state显示不同的文字内容
    ctx.fillText(
      this.state == 0 ? "恭喜你获得胜利" : "游戏失败",
      config.canvas.width / 2,
      config.canvas.height / 2
    );
    div.appendChild(el)
    // div.appendChild(button)
    app.appendChild(div);
  },

  // 控制游戏结束的函数stop，首先显示游戏结果的内容
  // 然后清除掉 用来不断检测游戏是否结束状态的定时器
  // 停止掉玩家坦克、敌方坦克、子弹的三个画布，否则在游戏结束之后
  // 敌方坦克（假如是输掉游戏）仍然可以自行移动，还可以发射子弹
  // 且玩家仍然可以控制玩家坦克和子弹的发射
  stop() {
    this.text()
    clearInterval(this.interve);
    tankCanvas.stop();
    bulletCanvas.stop();
    playerCanvas.stop()
  },
  async start() {
    // 如果已经开始游戏，则不执行start后面的操作，否则会多次渲染画布
    // 导致游戏页面图片不断增加
    if (this.isStart == true) return;

    // 表示游戏开始的状态值改变
    // 游戏开始的音乐加载
    // 游戏开始界面的背景图片消失
    this.isStart = true;
    music.start();
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
