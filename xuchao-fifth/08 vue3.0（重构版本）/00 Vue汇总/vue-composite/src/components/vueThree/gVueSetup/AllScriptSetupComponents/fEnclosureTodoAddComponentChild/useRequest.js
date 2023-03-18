import axios from "axios"
export default () => {
    return {
        async request(url = '', option = { method: 'get' }) {
            return await axios({
                method: option.method,
                url: `http://127.0.0.1:3003/news/${url}`
            })
        },

        async getRequest() {
            return await this.request()
        },

        async deleteRequest(url) {
            return await this.request(url, { method: "delete" })
        }
    }
}