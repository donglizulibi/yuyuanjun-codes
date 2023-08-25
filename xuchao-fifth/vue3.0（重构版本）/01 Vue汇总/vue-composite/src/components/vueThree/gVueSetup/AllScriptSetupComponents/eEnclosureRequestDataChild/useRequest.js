import axios from "axios"
export default () => {
    return {
        async request(url = '', options = { method: 'get' }, data) {
            return await axios({
                method: options.method,
                url: `http://127.0.0.1:3003/news/${url}`,
            })
        },

        async delete(url) {
            return await this.request(url, { method: 'delete' })
        },
        async getRequest(url) {
            return await this.request(url)
        },

        async post(data) {
            return await axios({
                method: 'post',
                url: `http://127.0.0.1:3003/news/`,
                data: { title: data }
            })
        },
        async put(url, data) {
            return await axios({
                method: 'put',
                url: `http://127.0.0.1:3003/news/${url}`,
                data: { title: data }
            })
        }
    }
}