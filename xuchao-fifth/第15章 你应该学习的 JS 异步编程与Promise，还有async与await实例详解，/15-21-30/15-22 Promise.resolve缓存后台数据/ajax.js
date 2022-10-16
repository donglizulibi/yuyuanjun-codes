// 对ajax异步请求再次封装

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
        // 在这个地方做一下请求地址的验证
        if (!/^http/.test(url)) {
            reject(new ParamError('请求地址错误'))
                // throw new ParamError('请求地址错误')
        } else {
            let xhr = new XMLHttpRequest();
            xhr.open('get', url)
            xhr.send()
            xhr.onload = function() {
                console.log(234)
                if (this.status == 200) {
                    resolve(JSON.parse(this.response))
                } else if (this.status == 404) {
                    reject(new HttpError('用户不存在'))
                        // throw new HttpError('用户不存在')
                } else {
                    reject('加载失败')
                }
            }
            xhr.onerror = function() {
                reject(this)
            }
            console.log(123)
        }
    })

}

// 这里是先打印123,再打印234,说明进入xhr.onload = function() {}
// 是新开了一个promise

// 第一个paramerror可以用throw也可以用reject
// 但是使用reject还是要用if和else

// 至于第二个httperror的可能只能用reject,使用throw会接不到错误
// 可能暂时可以理解为这是onload里的规定写法