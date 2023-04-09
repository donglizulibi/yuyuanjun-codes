import axios from 'axios'
const host = `http://127.0.0.1:3003/user`
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
    }).then((val) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(val.data)
            }, 200)
        })
    })
}

export default { all, find }