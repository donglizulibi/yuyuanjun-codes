export default function twoBox() {
  const el: HTMLCanvasElement = document.querySelector("#canvas")!;
  // 或者
  // const el = document.querySelector<HTMLCanvasElement>('#canvas')!

  const app = el.getContext("2d")!;

  console.log(app);

  app.fillStyle = "red";
  app.fillRect(0, 0, 300, 300);

  app.fillStyle = "blue";
  app.fillRect(el.width / 2 - 50, el.height / 2 - 50, 100, 100);

  // 画一个框
  // 定义线条的颜色
  app.strokeStyle = "black";
  // 定义线条的宽度
  app.lineWidth = 10;
  // 定义线条连接处的类型
  app.lineJoin = "round";
  app.strokeRect(50, 10, 100, 200);
  // 四个参数是框的左上角顶点的横坐标和纵坐标、框的宽度、框的高度

  // 画一个圆
  app.fillStyle = "yellow";  // 定义填充圆的颜色
  app.arc(50, 60, 50, 0, Math.PI * 2);
  // 四个参数分别是圆心的横坐标和纵坐标、圆的半径、
  // 圆的起始点（如果为零，则默认为圆的最右切点，如果有数值，
  //            则圆心与最右切点连线和圆心与起始点连线的夹角是(数值/2PI)*360
  //            夹角的方向是顺时针，画线的方向也是顺时针 ）

  // 圆是结束点（如果是Math.PI * 2，则结束点在圆的最右切点）

  app.stroke(); // 画圆的线条
  // app.fill(); // 填充圆

}
