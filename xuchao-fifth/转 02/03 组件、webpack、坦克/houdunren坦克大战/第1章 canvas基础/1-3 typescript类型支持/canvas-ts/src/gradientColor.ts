export default function gradientColor() {
  const el: HTMLCanvasElement = document.querySelector("#canvas")!;
  const app = el.getContext("2d")!;
  console.log(app);

  // 定义渐变色，四个参数数值规定了渐变色的范围，参数的大小顺序规定了渐变色的方向
  const gradient = app.createLinearGradient(100, 100, 0, 0);

  //   //   // 定义一些阈值
  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.5, "blue");
  gradient.addColorStop(0.7, "pink");
  gradient.addColorStop(1, "yellow");

  //   // 定义填充色
  app.fillStyle = gradient;
  //   // 定义填充矩形范围
  app.fillRect(0, 0, 100, 100);

  // 定义渐变框
  const gradientLine = app.createLinearGradient(120, 120, 220, 220);
  gradientLine.addColorStop(0, "red");
  gradientLine.addColorStop(0.5, "blue");
  gradientLine.addColorStop(0.7, "pink");
  gradientLine.addColorStop(1, "yellow");
  app.strokeStyle = gradientLine;
  app.lineWidth = 20;
  app.lineJoin = "round";
  app.strokeRect(120, 120, 100, 100);
}
