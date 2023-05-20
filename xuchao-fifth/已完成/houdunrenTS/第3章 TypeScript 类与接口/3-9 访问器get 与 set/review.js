class User {
    constructor(number) {
        this.data = { number }
    }

    // 总之 get后面的名称和get中return后面的名称不可以是一样的
    get number() {
        return this.data.number
    }
    set number(value) {
        if (value < 10) {
            this.data.number = value
        } else {
            console.log('执行不通过')
        }
    }
}

const instance = new User(9)
console.log(instance)
console.log(instance.number)
instance.number = 7
console.log(instance.number)