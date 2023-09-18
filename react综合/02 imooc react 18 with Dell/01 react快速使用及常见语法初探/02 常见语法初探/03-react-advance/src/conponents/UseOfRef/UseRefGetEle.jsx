import { useRef } from "react"
import InputComponent from "./InputComponent"

function UseRefGetEle(){
    // 
    const inputElement = useRef(null)

    function handleBtnClick(){
        inputElement.current.focus()
    }


    // const InputComponent = useRef(null)

    function handleCompClick(){
        console.log(InputComponent)
    }

    return(
        <div>
            <p>点击按钮使光标聚焦在输入框</p>
            <input ref={inputElement} type="text" />
            <button onClick={handleBtnClick}>Focus</button>

            <p>使用ref控制子组件中的输入框</p>
            {/* <InputComponent ref={InputComponent}/> */}
            <InputComponent />
            <button onClick={handleCompClick}>component focus</button>
        </div>
    )
}

export default UseRefGetEle