export default function canvaseDemo() {
  // 设置背景样式
  const body = document.querySelector("body")!;

  body.style.height = "100vh";
  body.style.width = "100vw";
  body.style.backgroundColor = "#34495e";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.innerHTML = `<canvas id="canvas" height="300" width="600"></canvas>`;

  //

  class Blackboard {
    private callback = (event: MouseEvent) => {
      this.drawLine(event);
    };
    public constructor(
      public el = document.querySelector<HTMLCanvasElement>("#canvas")!,
      public height: number = el.height,
      public width: number = el.width,
      public app = el.getContext("2d")!
    ) {
      this.initCanvas();
      this.bindEvent();
    }
    private bindEvent() {
      this.el.addEventListener("mousedown", () => {
        this.app.beginPath();
        this.app.strokeStyle = "white";
        this.el.addEventListener("mousemove", this.callback);
        body.addEventListener("mouseup", () => {
          this.el.removeEventListener("mousemove", this.callback);
        });
      });
    }
    private drawLine(event: MouseEvent) {
      this.app.lineTo(event.offsetX, event.offsetY);
      this.app.stroke();
    }
    private initCanvas() {
      this.app.fillStyle = "black";
      this.app.fillRect(0, 0, this.el.width, this.el.height);
    }
  }

  console.log(new Blackboard());
}
