import SetTimeUseRef from "./SetTImeUseRef"
import UseRefGetEle from "./UseRefGetEle"

function UseOfRef(){
    return (
        <div>
            <h4>使用useRef避免数据重置</h4>
            <SetTimeUseRef />

            <h4>使用ref获取元素实例</h4>
            <UseRefGetEle />
        </div>
    )
}


export default UseOfRef