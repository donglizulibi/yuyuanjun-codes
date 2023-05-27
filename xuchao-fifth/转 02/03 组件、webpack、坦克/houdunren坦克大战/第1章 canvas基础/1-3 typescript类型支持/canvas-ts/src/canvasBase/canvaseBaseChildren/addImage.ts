export default function addImage() {
  const el: HTMLCanvasElement = document.querySelector("#canvas")!;
  const app = el.getContext("2d")!;
  console.log(app);

  const img = document.createElement("img");
  img.src = "./images/p2.jpg";
  console.log(img);

  img.onload = () => {
    const patten = app.createPattern(img, "repeat")!;

    // "repeat" (both directions),
    // "repeat-x" (horizontal only),
    // "repeat-y" (vertical only),
    // "no-repeat" (neither).

    // 以前的例子都是用颜色或者渐变色作为背景，这里就是用不断重复的图片作为背景
    app.fillStyle = patten;
    app.fillRect(0, 0, 300, 300);
  };
}
