var arr = ['支付宝', '钱', '花费', '奖学金', '银行卡'];
var say = '兄弟在吗，哥们我最近碰到难处了，你借给我一万块钱，我发了奖学金就还给你';

//console.log(say.indexOf('钱'))

for (var i = 0; i < arr.length; i++) {
    // console.log(say.indexOf("arr[i]"))

    if (say.indexOf(arr[i]) != -1) {
        console.log("你的聊天记录里有敏感信息，请注意核实对方身份")
        return
    }
}