export default function deepCopy(params) {
    // 第一步先判断传进来的参数是一个对象还是数组
    // 如果是对象就建立空对象，如果是数组就建立空数组
    let copy = params instanceof Array ? [] : {}

    // 第二步是遍历，里面的判断条件可以使用typeof
    // 因为不管是数组还是对象都是返回object
    for (let [key, val] of Object.entries(params)) {
        if (typeof val == 'object') {
            copy[key] = deepCopy(val)
        } else {
            copy[key] = val
        }
    }
    return copy
}