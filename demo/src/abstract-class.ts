/*
 * @Author: LaoZhang
 * @Date: 2020-02-13 22:42:40
 * @LastEditors  : LaoZhang
 * @LastEditTime : 2020-02-13 22:49:45
 * @Description: 作用
 * @FilePath: /demo/src/abstract-class.ts
 */
abstract class AbsAnimal {
  run(){}
  abstract eat() : void;
}
// error
// const animal = new AbsAnimal()

// correct
class Cat extends AbsAnimal {
  constructor(){
    super();
  }
  eat() { console.log('swallow') }
}
const cat = new Cat();
cat.run();
cat.eat();

class Pig extends AbsAnimal {
  eat() {console.log('&^%$*^%');
  }
}