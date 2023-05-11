export default function getComponentState(data, name) {
    let arr = []
    let res = Object.keys(data).includes(name)
        // console.log(Object.keys(data))
    if (res) {
        // console.log(1)
        arr.push(data[name]["state"])
            // console.log(arr)
    } else {
        Object.keys(data).forEach(item => {
            if (data[item]['children']) {
                // console.log(data[item]['children'])
                let childRes = getComponentState(data[item]['children'], name)
                    // console.log(childRes)
                if (childRes != undefined) {
                    arr.push(childRes)
                }
            }
        })

    }
    // console.log(arr)
    return arr[0]
}