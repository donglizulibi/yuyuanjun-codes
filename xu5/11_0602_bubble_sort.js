var arr = [
    { name: 'xiaofang', age: 18 },
    { name: 'xiaohong', age: 22 },
    { name: 'xiaoli', age: 21 },
    { name: 'xiaowei', age: 19 },
]

// console.log(arr[0].age)

//arr = [18, 22, 21, 19]

function sort(arr) {
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length - 1; i++) {
            //console.log(arr[i].age)
            if (arr[i].age > arr[i + 1].age) {
                var box = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = box
            }
        }
    }
    return arr
}



// for (var i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i].age)
//     if (arr[i].age > arr[i + 1].age) {
//         var box = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = box
//     }
// }




console.log(sort(arr))