import canvasAbstract from "./canvasAbstract";

class tank extends canvasAbstract {
  constructor() {
    super();
    this.canvas.fillStyle = "black";
    this.canvas.fillRect(0, 0, 100, 100);
  }
}

const tankApp = new tank();
console.log(tankApp);
export default tankApp;
