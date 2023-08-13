import config from "../config";
interface colletionInterface {
  x: number;
  y: number;
}
class Position {
  public count = 0;

  // 定义一个数组收集所有元素的位置
  private allPositionColletion: colletionInterface[] = [];
  public position() {
    return {
      x:
        Math.floor(Math.random() * (config.canvas.width / config.model.width)) *
        config.model.width,

      // 改变竖向绘制草坪的排列，上面空出两行，下面空出五行
      y:
        Math.floor(
          2 + Math.random() * (config.canvas.height / config.model.height - 7)
        ) * config.model.height,
    };
  }
  public positionCollection(num: number) {
    const colletion = [] as colletionInterface[];
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position();

        // 在判断当前生成的随机位置是否已经存在于画布的时候，改为存储所有位置的数组
        const state = this.allPositionColletion.some((item) => {
          return item.x == position.x && item.y == position.y;
        });

        if (state) {
          this.count++;
          if (this.count > 10000) {
            break;
          }
        }
        if (!state) {
          colletion.push(position);
          this.allPositionColletion.push(position);
          break;
        }
      }
    }
    // console.log(this.allPositionColletion);
    return colletion;
  }
}

export default new Position();
