// 在ts中，如果出现两个同名的interface接口
// 则后面的接口会把前面接口的内容合并
{
    var Player = /** @class */ (function () {
        function Player() {
            this.position = { x: 100, y: 100 };
            this.name = 'houdunren';
        }
        Player.prototype.move = function () { };
        Player.prototype.end = function () { };
        return Player;
    }());
    var player = new Player();
    console.log(player);
}
