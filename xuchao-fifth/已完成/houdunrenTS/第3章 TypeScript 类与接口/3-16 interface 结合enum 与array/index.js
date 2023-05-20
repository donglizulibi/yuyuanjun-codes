{
    // 将枚举、接口和数组结合
    // 接口是定义一种规范的格式，而枚举是定义某一个值的选项列表
    var genderType = void 0;
    (function (genderType) {
        genderType[genderType["BOY"] = 0] = "BOY";
        genderType[genderType["GIRL"] = 1] = "GIRL";
    })(genderType || (genderType = {}));
    var user1 = {
        name: "houdunren",
        age: 19,
        gender: genderType.BOY
    };
    var user2 = {
        name: "hdcms",
        age: 18,
        gender: genderType.GIRL
    };
    var userArr = [user1, user2];
    console.log(userArr);
}
