import config from "../config";
type mapKey = keyof typeof config.images;
// 把config.images里面的属性的属性名集合起来，变成值类型联合类型规范
// 为后面将图片存入Map对象里面提供类型检查
// 相当于type mapKey = "straw" | "wall" | "water" | "steel" | "tankLeft" | "tankTop" | "tankBottom" | "tankRight" | "bullet" | "boss" | "playerBottom" | "playerLeft" | "playerTop" | "playerRight"

// 将key的约束string改为mapKey，在后面使用get调用的时候可以有比较好的代码提示
const image = new Map<mapKey, HTMLImageElement>();

console.log(config.images)
const promises = Object.entries(config.images).map(([key, value]) => {

  console.log(key, value);

  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.src = value;
    image.set(key as mapKey, img);

    // 图片加载成功之后会调用图片对象里面的onload方法
    // 如果加载失败则会调用onerror方法
    img.onload = () => {
      resolve(img);
    };
  });
});
console.log(promises);
// 此时promises是一个数组，里面的项目都是fulfilled状态的promise实例对象

export { promises, image };

