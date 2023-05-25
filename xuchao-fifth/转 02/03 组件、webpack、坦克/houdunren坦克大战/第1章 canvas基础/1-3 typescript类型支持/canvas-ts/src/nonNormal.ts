export default function nonNormal() {
  const el: HTMLCanvasElement = document.querySelector("#canvas")!;
  const app = el.getContext("2d")!;
  console.log(app);

  // 使用canvas画一个梯形

  // 画线的路径开始
  app.beginPath();

  // 图形的第一个点
  app.moveTo(100, 10);

  // 下一个点
  app.lineTo(200, 10);
  app.lineTo(270, 270);
  app.lineTo(50, 270);

  // 画完最后一个点以后，闭合图像
  app.closePath();

  // 定义线条颜色和粗细
  app.strokeStyle = "green";
  app.lineWidth = 5;

  app.stroke();

  // 如果要再画其他的图像，就重新再来一遍
  app.beginPath();
  app.moveTo(120, 20);
  app.lineTo(150, 170);
  app.strokeStyle = "red";
  app.lineWidth = 15;

  // 渲染页面
  app.stroke();
}
