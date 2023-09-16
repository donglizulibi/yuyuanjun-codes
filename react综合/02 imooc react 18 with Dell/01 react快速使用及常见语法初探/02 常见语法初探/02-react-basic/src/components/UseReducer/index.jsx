import TodoList from "./TodoList"
import TodoListUseReducer from "./TodoListUseReducer"
import TodoListUseReducerData from "./TodoListUseReducerData"
import TodoListUseImmerReducerData from "./TodoListUseImmerReducerData"
function UseReducer(){
    return (
        <div>
            <h4>不使用reducer实现一个todolist</h4>
            <TodoList />

            <h4>使用reducer实现一个todolist</h4>
            <TodoListUseReducer />

            <h4>只使用reducer实现todolist</h4>
            <TodoListUseReducerData />
            
            <h4>使用useImmerReducer实现todolist，避免复制对象</h4>
            <TodoListUseImmerReducerData />
        </div>
    )
}


export default UseReducer