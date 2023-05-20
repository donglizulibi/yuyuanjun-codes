// 如果要在ts中使用定义类, 需要在类的内部定义类的内置属性的类型
class HD {
  el: HTMLDivElement;
  arr: [];
  constructor(ele: HTMLDivElement) {
    this.el = ele;
    this.arr = [];
  }
  html(){
    return this.el.innerHTML
  }
}

let div1 = document.querySelector('.abc')
// 用以上方法获取元素, 只能推断出元素类型为Element
// 则这个元素对象是无法成为类构造实例时的参数的
// let obj = new HD(div1)

// 这时需要使用非空断言
let div = document.querySelector('.abc') as HTMLDivElement
let obj = new HD(div)
console.log(obj.html())

// 下面这样仅仅说明非空, 而没有指定具体的元素对象的类型, 是不行的
// let div = document.querySelector('.abc')! 


