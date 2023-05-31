import canvasAbstract from "./canvasAbstract";

class tank extends canvasAbstract {
  render(): void {

  }
  constructor() {
    super();
    this.canvas.fillStyle = "green";
    this.canvas.fillRect(0,0,this.el.width,this.el.height)
  }
}

const tankApp = new tank();
console.log(tankApp);
export default tankApp;
