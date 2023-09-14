import PassDataContext from "./context/PassDataContext"
import AdvanceContext from "./context/AdvanceContext"
import PassDataChildren from "./context/PassDataChildren"
import PassDataFromChildren from "./context/PassDataFromChildren"
function UseContext(){
    return (
        <div>
            <h4>使用Context完成深层传值</h4>
            <PassDataContext />

            <h4>Context的进阶用法</h4>
            <AdvanceContext />

            <h4>使用Children进行父子间组件传递数据</h4>
            <PassDataChildren />

            <h4>通过props传递一个方法来实现子级向父级传递数据</h4>
            <PassDataFromChildren />
        </div>
    )
}

export default UseContext