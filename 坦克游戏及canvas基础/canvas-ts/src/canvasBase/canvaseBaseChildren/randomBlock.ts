export default function randomBlock() {
  const el: HTMLCanvasElement = document.querySelector("#canvas")!;
  const app = el.getContext("2d")!;
  console.log(app);

  let arr = ["red", "orange", "yellow", "green", "blue", "pink"];

  setInterval(() => {
    app.clearRect(0, 0, 300, 300);
    for (let i = 0; i < 100; i++) {
      let key = Math.floor(Math.random() * 7);

      app.beginPath();
      app.fillStyle = arr[key];
    //   app.strokeStyle = arr[key];
      app.arc(
        Math.random() * el.width,
        Math.random() * el.height,
        5 + Math.random() * 10,
        0,
        Math.PI * 2
      );
      app.fill();
    // app.stroke()
    }
  }, 300);
}
