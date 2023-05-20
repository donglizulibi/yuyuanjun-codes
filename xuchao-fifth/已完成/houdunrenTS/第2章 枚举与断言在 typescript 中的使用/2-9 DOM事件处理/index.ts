const btn  = document.querySelector(".btn") as HTMLButtonElement
btn.addEventListener('click',(el:Event)=>{
    el.preventDefault()
    const body = document.querySelector('body')!
    body.insertAdjacentHTML('beforeend',`<h2>houdunren</h2>`)
})

// 事件对象的参数的类型用Event来定义