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
        let loading = document.querySelector('#loading')
        loading.style.display = 'block'

        if (!/^http/.test(url)) {
            reject(new ParamError('请求地址错误'))

        } else {
            // 在这里加一个定时器,来模拟从发送请求到接收数据需要一秒钟
            setTimeout(() => {
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

            }, 1000)



        }
    })

}