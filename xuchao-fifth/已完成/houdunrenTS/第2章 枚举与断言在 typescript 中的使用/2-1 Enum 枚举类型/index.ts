{
// 在定义一些属性时, 需要用数值来作为属性值
// 而有时候单纯的数值让人难以辨认具体是哪个属性值

// 于是可以把这些数值对应的属性值先定义在枚举类型里面
// 枚举类型内部的属性会自动匹配到相应的遍历出来的数值
enum genderType {
  BOY,
  GIRL,
}

console.log(genderType.BOY);
console.log(genderType.GIRL);

let user: { name: string; gender: number } = {
  name: "houdunren",
  gender: genderType.BOY,
};

console.log(user);


}
