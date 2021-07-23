var str = "you can you up no can no bb"
console.log()
var arr = str.split(" ")
var strAll = ""
for (let i = 0; i < arr.length; i++) {
    strAll = strAll + " " + arr[i].slice(0, 1).toLocaleUpperCase() + arr[i].slice(1)

}
console.log(strAll)