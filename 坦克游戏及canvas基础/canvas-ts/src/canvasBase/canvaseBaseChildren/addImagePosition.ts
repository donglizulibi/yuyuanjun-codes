export default function addImagePosition() {
  const el: HTMLCanvasElement = document.querySelector("#canvas")!;
  const app = el.getContext("2d")!;
  console.log(app);

  const img = document.createElement("img");
  img.src = "./images/p1.jpg";
  console.log(img);

  // 上面的例子只能控制一张图片是横向重叠还是纵向重叠还是全部重叠
  // 而不能在画布的某个具体位置显示图片

  // 所以需要具体控制图片的位置，并且可以将图片进行缩放
  //   img.onload = () => {
  //     drawImage的五个参数，第一个放图片对象，第二个、第三个是图片的位置
  //     第四个、第五个是图片缩放后的尺寸
  //     app.drawImage(img, 80, 30, 20, 20);
  //   };

  // 现在定义一个等比缩放函数，可以根据画布的尺寸自动将图片进行缩小或者放大
  // 在保证图片整体处在画布内的前提下，使得图片的长或者宽与画布的长或者宽相等
  // 同时会改变画布本身的大小

  function scale(img: HTMLImageElement, el: HTMLCanvasElement) {
    return Math.min(el.width / img.naturalWidth, el.height / img.naturalHeight);
  }

  img.onload = () => {
    el.width = img.naturalWidth * scale(img, el);
    el.height = img.naturalHeight * scale(img, el);
    app.drawImage(img, 0, 0, el.width, el.height);
  };
}
