/*
 * @Author: LaoZhang
 * @Date: 2020-02-13 22:50:07
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-02-13 22:59:38
 * @Description: 作用
 * @FilePath: /demo/src/abstract-class.js
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * @Author: LaoZhang
 * @Date: 2020-02-13 22:42:40
 * @LastEditors  : LaoZhang
 * @LastEditTime : 2020-02-13 22:49:45
 * @Description: 作用
 * @FilePath: /demo/src/abstract-class.ts
 */
var AbsAnimal = /** @class */ (function () {
    function AbsAnimal() {
    }
    AbsAnimal.prototype.run = function () { };
    return AbsAnimal;
}());
// error
const animal = new AbsAnimal()
// correct
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this) || this;
    }
    Cat.prototype.eat = function () { console.log('swallow'); };
    return Cat;
}(AbsAnimal));
var cat = new Cat();
cat.run();
cat.eat();
