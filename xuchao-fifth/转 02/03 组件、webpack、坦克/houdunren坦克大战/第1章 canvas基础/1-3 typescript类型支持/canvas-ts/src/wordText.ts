export default function wordText() {
  const el: HTMLCanvasElement = document.querySelector("#canvas")!;
  const app = el.getContext("2d")!;
  console.log(app);

  const gradient = app.createLinearGradient(300, 100, 20, 100);
  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.5, "blue");
  gradient.addColorStop(0.7, "pink");
  gradient.addColorStop(1, "yellow");

  // 先让画布全部变为深色
  app.fillStyle = "black";
  app.fillRect(0, 0, 300, 300);

// 定义文字的大小和字体
app.font = '50px Kai-Medium-EUC'

// 设置文字颜色
app.fillStyle = 'white'

// 调整文字几线
app.textBaseline = 'top'

// 设置文字是填充还是使用线框，文字内容，文字初始位置
app.fillText('后盾人',20,20)

// 设置双线的文字
app.font = '20px'
app.strokeStyle =gradient
app.lineWidth = 3
app.strokeText('houdunren',20,100)
}
