var arr = [
    { name: 'xiaofang', age: 18 },
    { name: 'xiaohong', age: 22 },
    { name: 'xiaoli', age: 21 },
    { name: 'xiaowei', age: 19 },
]

arr = arr.map((item) => {

    return { name: item.name, sex: 'girl' }
})
console.log(arr)