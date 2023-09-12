import TodoList from "./child/TodoList"
import TodoListUseReducer from "./child/TodoListUseReducer"
function UseReducer(){
    return (
        <div>
            <h4>不使用reducer实现一个todolist</h4>
            <TodoList />

            <h4>使用reducer实现一个todolist</h4>
            {/* <TodoListUseReducer /> */}
        </div>
    )
}


export default UseReducer