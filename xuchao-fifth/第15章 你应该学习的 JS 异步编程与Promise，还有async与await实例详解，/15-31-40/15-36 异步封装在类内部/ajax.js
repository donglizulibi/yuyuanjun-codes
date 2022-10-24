// 对ajax异步请求再次封装

// json-server --watch --port 3003 --host 127.0.0.1 db.json

// 参数错误的类
class ParamError extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'ParamError'
    }
}
class HttpError extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'HttpError'
    }
}

function ajax(url) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 在这个地方做一下请求地址的验证
            if (!/^http/.test(url)) {
                reject(new ParamError('请求地址错误'))
                    // throw new ParamError('请求地址错误')
            } else {
                let xhr = new XMLHttpRequest();
                xhr.open('get', url)
                xhr.send()
                xhr.onload = function() {
                    if (this.status == 200) {
                        resolve(JSON.parse(this.response))
                    } else if (this.status == 404) {
                        reject(new HttpError('用户不存在'))
                    } else {
                        reject('加载失败')
                    }
                }
                xhr.onerror = function() {
                    reject(this)
                }
            }
        }, 300)
    })

}