var Alipay = /** @class */ (function () {
    function Alipay() {
    }
    Alipay.prototype.handle = function (price) {
        console.log("\u652F\u4ED8\u5B9D\u4ED8\u6B3E".concat(price));
    };
    return Alipay;
}());
var Wepay = /** @class */ (function () {
    function Wepay() {
    }
    Wepay.prototype.handle = function (price) {
        console.log("\u5FAE\u4FE1\u4ED8\u6B3E".concat(price));
    };
    return Wepay;
}());
function pay(type, price) {
    // 在这里出现一个需要使用非空断言的情况
    // 函数体中要先创建一个未定义的、将来会根据不同的条件赋予不同值的变量
    // 而后面的函数体会出现调用这个变量中的方法的语句
    // 所以在这个变量未赋值之前，就会出现从undefined中调用方法的情况
    // 未解决这个问题，就需要在创建变量的时候进行非空断言，剔除undefined的情况
    var payObj;
    //   if (type == "alipay") {
    //     payObj = new Alipay();
    //   } else if (type == "wepay") {
    //     payObj = new Wepay();
    //   }
    switch (type) {
        case "alipay":
            payObj = new Alipay();
            break;
        case "wepay":
            payObj = new Wepay();
    }
    payObj.handle(price);
}
