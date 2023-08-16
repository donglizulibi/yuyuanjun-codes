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
var User = /** @class */ (function () {
    function User(app, el, node) {
        if (app === void 0) { app = document.querySelector(".app"); }
        if (el === void 0) { el = document.createElement("span"); }
        if (node === void 0) { node = el.nodeType; }
        this.app = app;
        this.el = el;
        this.node = node;
        // 设置类的共享属性见js-12-4
        this.arr = [];
    }
    return User;
}());
var Render1 = /** @class */ (function (_super) {
    __extends(Render1, _super);
    function Render1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.randerOneParams = 'render1';
        return _this;
    }
    return Render1;
}(User));
var Render2 = /** @class */ (function (_super) {
    __extends(Render2, _super);
    function Render2() {
        var _this = _super.call(this) || this;
        _this.randerTwoParams = 'render2';
        return _this;
    }
    return Render2;
}(User));
console.dir(User);
console.log(new Render1());
console.log(new Render2());
