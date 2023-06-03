import config from "../config";
type mapKey = keyof typeof config.images;

// 将key的约束string改为mapKey，在后面使用get调用的时候可以有比较好的代码提示
const image = new Map<mapKey, HTMLImageElement>();

const promises = Object.entries(config.images).map(([key, value]) => {
  console.log(key, value);
  
  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.src = value;
    image.set(key as mapKey, img);

    img.onload = () => {
      resolve(img);
    };
  });
});
// console.log(promises);

export { promises, image };
