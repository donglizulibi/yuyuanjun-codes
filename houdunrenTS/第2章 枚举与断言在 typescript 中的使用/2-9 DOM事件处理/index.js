var btn = document.querySelector(".btn");
btn.addEventListener('click', function (el) {
    el.preventDefault();
    var body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', "<h2>houdunren</h2>");
});
// 事件对象的参数的类型用Event来定义
