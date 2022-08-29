import Todo from "./components/Todo.js"
import db from "./data/todoData.js"
import Hd from "./components/hd.js"
console.log(Todo)
console.log(db)



export default {
    data() {
        return {
            db,
            middle: '父传子的数据'
        }
    },
    components: {
        Todo,
        Hd,

    }
}