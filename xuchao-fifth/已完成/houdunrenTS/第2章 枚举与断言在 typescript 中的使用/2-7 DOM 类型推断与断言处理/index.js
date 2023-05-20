// 在获取页面元素的时候, 如果元素是唯一的, 类型推断会推断到对应的类型
// 如果是模糊的, 则会推断到最高级的元素对象
var body = document.querySelector('body'); // HTMLBodyElement | null
var div = document.querySelector('.hd'); // Element | null
// 如果不想到最高级的元素对象, 则可以进行断言
var divEle = document.querySelector('.hd');
