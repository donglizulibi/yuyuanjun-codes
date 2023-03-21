import useRequest from "./useRequest";
import { ref } from 'vue'
let todos = ref([])
let orderby = ref('desc')
export default () => {
    let request = useRequest()
    let load = async() => {
        let res = await request.getRequest()
        todos.value = res.data
        sortfunc()
    }

    let del = async(id) => {
        await request.deleteRequest(id)
        load()
    }

    let add = async(data) => {
        await request.post(data)
        load()
    }

    let sortfunc = () => {

        todos.value = Array.prototype.sort.call(todos.value, (a, b) => {
            if (orderby.value == 'desc') {
                return b.id - a.id
            } else {
                return a.id - b.id
            }

        })
    }

    let sort = () => {
        if (orderby.value == 'desc') {
            orderby.value = 'asc'
        } else {
            orderby.value = 'desc'
        }

        sortfunc()

    }
    return { load, todos, del, add, sort, orderby }
}