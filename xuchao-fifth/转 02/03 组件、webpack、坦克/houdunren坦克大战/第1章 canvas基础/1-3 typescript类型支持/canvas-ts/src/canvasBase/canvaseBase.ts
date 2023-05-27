// import twoBox from './canvaseBaseChildren/twoBox'
// import nonNormal from './canvaseBaseChildren/nonNormal'
// import gradientColor from "./canvaseBaseChildren/gradientColor"
// import wordText from "./canvaseBaseChildren/wordText"
// import addImage from "./canvaseBaseChildren/addImage"
// import addImagePosition from "./canvaseBaseChildren/addImagePosition";
import randomBlock from "./canvaseBaseChildren/randomBlock";

export default function canvaseBase() {
  const body = document.querySelector("body")!;
  body.innerHTML += `<canvas id="canvas" width="300" height="300"></canvas>`;
  // twoBox()
  // nonNormal()
  // gradientColor()
  // wordText()
  // addImage()
  // addImagePosition()
  randomBlock();
}
