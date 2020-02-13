/*
 * @Author: LaoZhang
 * @Date: 2020-02-13 22:10:38
 * @LastEditors  : LaoZhang
 * @LastEditTime : 2020-02-13 22:17:35
 * @Description: 作用
 * @FilePath: /demo/src/class.ts
 */
var Dog = /** @class */ (function () {
    function Dog(name) {
        // 在构造函数中初始化的属性, 可以不指定默认值
        // name: string;
        this.name = '';
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log('bone');
    };
    return Dog;
}());
console.log(Dog.prototype);
var Husky = new Dog('FeiYang');
console.log(Husky);
