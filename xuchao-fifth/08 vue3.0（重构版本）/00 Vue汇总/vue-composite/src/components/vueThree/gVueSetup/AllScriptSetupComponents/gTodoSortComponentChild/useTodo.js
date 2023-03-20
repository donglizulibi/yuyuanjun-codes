import useRequest from "./useRequest";
import { ref } from 'vue'
let todos = ref([])
export default () => {
    let request = useRequest()
    let load = async() => {
        let res = await request.getRequest()
        todos.value = res.data
    }

    let del = async(id) => {
        await request.deleteRequest(id)
        load()
    }

    let add = async(data) => {
        await request.post(data)
        load()
    }
    return { load, todos, del, add }
}