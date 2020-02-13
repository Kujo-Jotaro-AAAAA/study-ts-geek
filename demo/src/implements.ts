/*
 * @Author: LaoZhang
 * @Date: 2020-02-13 23:12:03
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-02-13 23:52:06
 * @Description: 作用
 * @FilePath: /demo/src/implements.ts
 */
interface Animal {
  name: string;
  run: () => void;
}
class Ox implements Animal {
  constructor(){
    
  }
  name: string = '乔丹';
  run() {
    console.log('飞快');
  }
  money: number = 999999999999;
}
class Auto {
  state = 1
}
// 接口继承类
interface AutoInterface extends Auto {}
// 类实现接口
class C implements AutoInterface {
  state: number = 1;
}
// 子类继承后实现接口
class Bus extends Auto implements AutoInterface {}