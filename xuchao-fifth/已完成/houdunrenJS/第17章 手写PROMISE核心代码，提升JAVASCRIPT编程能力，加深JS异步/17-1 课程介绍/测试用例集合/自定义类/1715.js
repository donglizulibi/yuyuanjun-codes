class HD {
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'
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
            this.status = HD.FULFILLED
            this.value = value
        }

        setTimeout(() => {
            if (this.callbacks.length) {
                this.callbacks[0].onFulfilled(value)
            }
        })
    }
    reject(reason) {
        if (this.status === HD.PENDING) {
            this.status = HD.REJECTED
            this.value = reason
        }

        setTimeout(() => {
            if (this.callbacks.length) {
                this.callbacks[0].onRejected(reason)
            }
        })
    }
    then(onFulfilled, onRejected) {
        if (!(onFulfilled instanceof Function)) {
            onFulfilled = val => {
                return val
            }
        }

        if (!(onRejected instanceof Function)) {
            onRejected = rea => {
                return rea
            }
        }

        return new HD((resolve, reject) => {
            if (this.status === HD.PENDING) {
                this.callbacks.push({
                    onFulfilled: val => {
                        try {
                            this.parse(onFulfilled(val), resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    },
                    onRejected: rea => {
                        try {
                            this.parse(onRejected(rea), resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }
                })
            }

            if (this.status === HD.FULFILLED) {
                setTimeout(() => {
                    try {
                        let result = onFulfilled(this.value)
                        this.parse(result, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            if (this.status === HD.REJECTED) {
                setTimeout(() => {
                    try {
                        let result = onRejected(this.value)
                        this.parse(result, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }

                })
            }
        })

    }

    parse(result, resolve, reject) {
        if (result instanceof HD) {
            result.then(resolve, reject)
        } else {
            resolve(result)
        }

    }
}