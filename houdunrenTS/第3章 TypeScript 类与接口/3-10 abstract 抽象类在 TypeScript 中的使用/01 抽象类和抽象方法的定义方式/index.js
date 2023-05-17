var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 抽象类和抽象方法是使用场景如下
// 假如有多个子类需要继承一个父类的方法
// 多个子类中都必须有一个同名的但是不同内容的方法
// 为了使代码更加稳固，可以把父类定义为抽象类，在父类中定义这个名称的抽象方法
// 父类中的抽象方法不用定义方法体，只需要设置返回类型
// 这样子类中就必须设置这个名称的方法，否则会报错，由此形成一种规范
{
    var Animation_1 = /** @class */ (function () {
        function Animation() {
        }
        Animation.prototype.getProps = function () {
            return [1, 2, 3];
        };
        return Animation;
    }());
    var Tank = /** @class */ (function (_super) {
        __extends(Tank, _super);
        function Tank() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tank.prototype.move = function () {
            console.log('Tank move');
        };
        Tank.prototype.getProps = function () {
            return [2, 3, 4];
        };
        return Tank;
    }(Animation_1));
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Player.prototype.move = function () {
            console.log('Player move');
        };
        return Player;
    }(Animation_1));
}
