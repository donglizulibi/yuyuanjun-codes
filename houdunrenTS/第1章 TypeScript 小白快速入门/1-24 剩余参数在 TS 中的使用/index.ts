// 有多个不确定数量的参数
function sum(...args: number[]): number {
  let res = args.reduce((pre, val) => {
    pre += val;
    return pre;
  }, 0);
  return res;
}

console.log(sum(1,2,3,4))

// 第一个参数是确定的, 但是后面的参数都不确定
function push(arr:any[],...args:any[]):any[]{
    arr.push(...args)
    return arr
} 
let hd = ['houdunren']
console.log(push(hd,'abc',123,true))
