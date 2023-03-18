import useRequest from "./useRequest"
import { ref } from "vue"

export default async() => {
    const todos = ref([]);
    const request = useRequest();
    let resGet = await request.getRequest();
    todos.value = resGet.data;

    return { todos }
}

// todos.value = request.getRequest().data;