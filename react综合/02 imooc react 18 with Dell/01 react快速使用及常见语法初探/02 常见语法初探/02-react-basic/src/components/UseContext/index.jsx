import PassDataContext from "./PassDataContext"
import AdvanceContext from "./AdvanceContext"
import ReducerContextTodolist from "./ReducerContextTodolist"
function UseContext(){
    return (
        <div>
            <h4>使用Context完成深层传值</h4>
            <PassDataContext />

            <h4>Context的进阶用法</h4>
            <AdvanceContext />


            <h4>使用Reducer和Context结合实现todolist</h4>
            <ReducerContextTodolist />
        </div>
    )
}

export default UseContext