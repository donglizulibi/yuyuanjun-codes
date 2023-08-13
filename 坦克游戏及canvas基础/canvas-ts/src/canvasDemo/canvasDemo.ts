import "./demoStyle.css";
export default function canvasDemo() {
  const body = document.querySelector("body")!;
  body.innerHTML = `<canvas id="canvas" height="300" width="600"></canvas>`;

  class Blackboard {
    private callback = (event: MouseEvent) => {
      this.drawLine(event);
    };
    public constructor(
      public el = document.querySelector<HTMLCanvasElement>("#canvas")!,
      public height: number = el.height,
      public width: number = el.width,
      public app = el.getContext("2d")!,
      public bgColor = "black",
      public lineColor = "white",
      public btns: HTMLDivElement = document.createElement("div")
    ) {
      this.initCanvas();
      this.bindEvent();
    }
    private bindEvent() {
      this.el.addEventListener("mousedown", () => {
        this.app.beginPath();
        this.app.strokeStyle = this.lineColor;
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
      this.app.fillStyle = this.bgColor;
      this.app.fillRect(0, 0, this.el.width, this.el.height);
      this.el.insertAdjacentElement("afterend", this.btns);
      this.btns.classList.add("btns");
    }

    public clear() {
      const button: HTMLButtonElement = document.createElement("button");
      button.innerText = "清屏";
      this.btns.insertAdjacentElement("afterbegin", button);
      button.addEventListener("click", () => {
        this.app.fillStyle = this.bgColor;
        this.app.fillRect(0, 0, this.el.width, this.el.height);
      });
      return this;
    }

    public setBgColor(color: string) {
      this.bgColor = color;
      this.app.fillStyle = color;
      this.app.fillRect(0, 0, this.el.width, this.el.height);
      return this;
    }

    public setLineColor() {
      const colors = [
        "white",
        "red",
        "orange",
        "yellow",
        "green",
        "pink",
        "blue",
      ];
      const colorDiv: HTMLDivElement = document.createElement("div");
      colorDiv.classList.add("color-div");

      this.btns.insertAdjacentElement("beforeend", colorDiv);
      colors.forEach((item) => {
        const colorEle = document.createElement("div");
        colorEle.classList.add("color-ele");
        colorEle.style.backgroundColor = item;
        colorDiv.insertAdjacentElement("afterbegin", colorEle);
        colorEle.addEventListener("click", () => {
          this.app.lineWidth = 1;
          this.lineColor = item;
        });
      });
      return this;
    }

    public eraser() {
      const button: HTMLButtonElement = document.createElement("button");
      button.innerText = "橡皮";
      this.btns.insertAdjacentElement("afterbegin", button);
      button.addEventListener("click", () => {
        this.lineColor = this.bgColor;
        this.app.lineWidth = 20;
      });
    }
    public short() {
      const button: HTMLButtonElement = document.createElement("button");
      button.innerText = "截图";
      this.btns.insertAdjacentElement("afterbegin", button);
      const img = document.createElement("img");
      button.addEventListener("click", () => {
        img.src = this.el.toDataURL("image/jpeg");
        img.classList.add("img-short");
      });
      this.btns.insertAdjacentElement("afterend", img);
    }
  }

  const instance = new Blackboard();
  //   instance.clear().setBgColor("blue");
  instance.clear();
  instance.setLineColor();
  instance.eraser();
  instance.short();
}
