import { useRef } from "react"
import InputComponent from "./InputComponent"

function UseRefGetEle(){
    // 使用useRef，里面传入一个null，赋值给input上给ref定义的值
    // 就可以拿到input元素
    const inputElement = useRef(null)

    function handleBtnClick(){
        console.log(inputElement.current)
        inputElement.current.focus()
    }

    // 在默认情况下，react不希望父组件通过ref来修改子组件的dom元素
    // 如果一定要有父组件调用子组件的数据，则除了父组件调用子组件上
    // 绑定ref之外，还需要在子组件上引入forwardRef方法
    // 把子组件函数作为回调函数传入forwardRef方法中

    // 此时的子组件除了可以接受到原来的props参数，也就是在父组件上绑定的属性
    // 还有接收到另一个参数，就是ref ，来接受父组件传递过去的ref的值
    // 在这里就是InputComponent

    // 子组件拿到ref之后，在绑定在自身jsx的元素上
    
    // 这样就可以实现把在父组件中用useRef定义的ref
    // 传递到子组件

    const InputComponentRef = useRef(null)
    function handleCompClick(){
        console.log(InputComponentRef)
        InputComponentRef.current.focus()
    }

    return(
        <div>
            <p>点击按钮使光标聚焦在输入框</p>
            <input ref={inputElement} type="text" />
            <button onClick={handleBtnClick}>Focus</button>

            <p>使用ref控制子组件中的输入框</p>
            {/* <InputComponent ref={InputComponent}/> */}
            <InputComponent ref={InputComponentRef} />
            <button onClick={handleCompClick}>component focus</button>
        </div>
    )
}

export default UseRefGetEle