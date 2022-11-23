class HD {
    static PENDING = "pending"
    static REJECTED = "rejected"
    static FULFILLED = "fulfilled"
    constructor(excutor) {
        this.callbacks = []
        this.status = HD.PENDING
        this.value = null
        try {
            excutor(this.resolve.bind(this),
                this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(value) {
        if (this.status === HD.PENDING) {
            this.value = value
            this.status = HD.FULFILLED
        }
        setTimeout(() => {
            if (this.callbacks.length) {
                // console.log(this.callbacks)
                this.callbacks[0].onFulfilled(value)
            }
        })
    }
    reject(reason) {
        if (this.status === HD.PENDING) {
            this.value = reason
            this.status = HD.REJECTED
        }
        setTimeout(() => {
            if (this.callbacks.length) {
                this.callbacks[0].onRejected(reason)
            }
        })

    }

    then(onFulfilled, onRejected) {
        if (!(onFulfilled instanceof Function)) {
            onFulfilled = () => this.value
        }
        if (!(onRejected instanceof Function)) {
            onRejected = () => this.value
        }

        let promise = new HD((resolve, reject) => {
            if (this.status === HD.PENDING) {
                this.callbacks.push({
                    onFulfilled: val => {
                        let result
                        try {
                            result = onFulfilled(val)
                        } catch (error) {
                            reject(error)
                            return 1
                        }
                        this.parse(promise, result, resolve, reject)

                    },
                    onRejected: rea => {
                        let result
                        try {
                            result = onRejected(rea)
                        } catch (error) {
                            reject(error)
                            return 1
                        }
                        this.parse(promise, result, resolve, reject)
                    }
                })
            }

            if (this.status === HD.FULFILLED) {
                setTimeout(() => {
                    let result
                    try {
                        result = onFulfilled(this.value)
                    } catch (error) {
                        reject(error)
                        return 1
                    }
                    this.parse(promise, result, resolve, reject)
                })
            }

            if (this.status === HD.REJECTED) {
                setTimeout(() => {
                    let result
                    try {
                        result = onRejected(this.value)
                    } catch (error) {
                        reject(error)
                        return 1
                    }
                    this.parse(promise, result, resolve, reject)
                })
            }

        })
        return promise

    }
    parse(promise, result, resolve, reject) {
        if (promise === result) {
            throw new TypeError('cycle promise problem')
        } else {
            if (result instanceof HD) {
                result.then(resolve, reject)
            } else {
                resolve(result)
            }
        }
    }

    static resolve(value) {
        return new HD((resolve, reject) => {
            if (value instanceof HD) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        })
    }
    static reject(value) {
        return new HD((resolve, reject) => {
            reject(value)
        })
    }
}