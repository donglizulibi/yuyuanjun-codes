import { useRef } from "react"
import { useState } from "react"

// 在这里需要写一个需求
// 页面中有两个按钮，点击第一个按钮的时候，时间戳的计数会不断增加
// 点击第二个按钮的时候，时间戳计数停止

// 则在这里，两个按钮的点击事件就涉及到一些基本的逻辑
// 首先在开始按钮中应该开启一个定时器，设置定时器间隔
// 在每个时间间隔内调用useState定义的setTime方法，来给页面重置当下时间戳
// 在结束按钮内清除掉这个定时器

// 则由此出现一个问题，也就是要在结束按钮中清除定时器，则定时器的标识
// 要在哪里定义的问题，如果在开始按钮的事件逻辑中定义
// 则无法被结束按钮的事件逻辑获取

// 如果在组件内部先把标识timer定义为null，然后在开始按钮中赋值为定时器
// 则在定时器启动之后，每个时间间隔之内都会调用setTime，也就是重启组件函数

// 这样在组件函数的这个作用域内，标识timer又被重置为null，且始终为null
// 也就无法被结束按钮事件函数清除

// 一个解决办法就是，把timer标识创建放在组件函数的作用域外部
// timer在被赋值为定时器之后，组件函数不断重置也不会影响其取值
// 触发结束按钮的点击事件之后，也可以把timer清除

// 但是这样的设置就破环了组件的内聚性和统一性

// 那么另一个解决办法就是引入useRef来存储数据
// 使用方法就是外部引入之后，在useRef内部放入数据的初始值
// 此时数据会变成包含current属性的对象，再赋值给变量
// 这个方法的特性就是，组件函数重置之后，不会再把变量重置为初始值

// 从这个角度上说，useState也是定义了初始数据之后，在每次组件函数重置之后
// 也不会把变量再次赋值为初始数据

// 在具体使用useRef定义的数据的时候，后面需要修改或者使用这个数据
// 要调用这个数据的current属性

// let timer = null
function SetTimeUseRef(){
    const [time,setTime] = useState((new Date()).getTime())

    // let timer = null
    let timer = useRef(null)
    function handleStartClick(){
        timer.current = setInterval(() => {
            setTime((new Date()).getTime())
        }, 1000);
    }
    function handleStopClick(){
        console.log(timer)
        clearInterval(timer.current)
    }


    return (
        <div>
            <button onClick={handleStartClick}>start</button>
            <button onClick={handleStopClick}>stop</button>
            <div>{time}</div>
        </div>
    )
}


export default SetTimeUseRef