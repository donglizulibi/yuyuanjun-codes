import canvasAbstract from "./canvasAbstract";
// import config from "../config";
import bulletModel from "../model/bullet.ts";
import tankApp from "./tank.ts";
import config from "../config.ts";

class bullet extends canvasAbstract implements ICanvas {
  name: string = "bullet";
  num(): number {
    return tankApp.models.length;
  }
  model(): BulletModelConstructor {
    return bulletModel;
  }

  render(): void {
    
    
    setInterval(() => {
      this.createBullet();
      this.renderModels();
    }, config.bullet.speed);
   
  }

  renderBullet() {
  }

  public renderModels(): void {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    super.renderModels();
  }
  // render(): void {
  //   setTimeout(this.createBullet, 100);
  // }
  createBullet() {
    // console.log(this.num())
    tankApp.models.forEach((tank) => {
      const isLanched = this.models.some((item) => item.tank == tank);
      if (!isLanched) {
        this.models.push(new bulletModel(tank));
      }
    });
    // console.log(this.models);
  }
}

const bulletInstance = new bullet("bullet");
export default bulletInstance;
