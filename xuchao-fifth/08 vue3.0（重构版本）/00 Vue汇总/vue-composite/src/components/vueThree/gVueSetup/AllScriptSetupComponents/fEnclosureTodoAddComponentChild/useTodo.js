import useRequest from "./useRequest";
import { ref } from 'vue'
export default async() => {
    let todos = ref([])
    let request = useRequest()
    let res = await request.getRequest()
        // console.log(res)
        // console.log(123)
    todos.value = res.data
    return todos
}