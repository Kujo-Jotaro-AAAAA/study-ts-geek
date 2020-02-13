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
 * @Date: 2020-02-13 23:04:45
 * @LastEditors  : LaoZhang
 * @LastEditTime : 2020-02-13 23:08:15
 * @Description: 作用
 * @FilePath: /demo/src/chain-this.ts
 */
var WorkFlow = /** @class */ (function () {
    function WorkFlow() {
        this.num = 0;
    }
    WorkFlow.prototype.step1 = function () {
        this.num + 1;
        return this;
    };
    return WorkFlow;
}());
var MyFlow = /** @class */ (function (_super) {
    __extends(MyFlow, _super);
    function MyFlow() {
        return _super.call(this) || this;
    }
    MyFlow.prototype.next = function () {
        this.num + 1;
        return this;
    };
    return MyFlow;
}(WorkFlow));
var flow = new MyFlow();
flow.next().step1().next().next().next().next().next();
console.log(flow.num);
