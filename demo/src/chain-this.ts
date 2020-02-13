/*
 * @Author: LaoZhang
 * @Date: 2020-02-13 23:04:45
 * @LastEditors  : LaoZhang
 * @LastEditTime : 2020-02-13 23:12:09
 * @Description: 作用
 * @FilePath: /demo/src/chain-this.ts
 */
class WorkFlow {
  step1() {
    return this;
  }
}
class MyFlow extends WorkFlow {
  constructor() {
    super()
  }
  next() {
    return this;
  }
}
const flow = new MyFlow();
flow.next().step1().next().next().next().next().next();

