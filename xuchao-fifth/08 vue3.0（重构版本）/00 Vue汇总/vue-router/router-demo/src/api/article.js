import axios from 'axios'
const host = `http://127.0.0.1:3003/article`
const all = async() => {
    return axios({
        method: 'get',
        url: host
    }).then((val) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(val.data)
            }, 200)
        })
    })
}

const find = async(id) => {
    return axios({
        method: 'get',
        url: host + `/${id}`
            // url: host + `?id=${id}`
    }).then((val) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(val.data)
            }, 100)
        })
    })
}

export default { all, find }