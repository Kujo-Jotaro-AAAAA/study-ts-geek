/*
 * @Author: LaoZhang
 * @Date: 2020-02-13 22:10:38
 * @LastEditors  : LaoZhang
 * @LastEditTime : 2020-02-13 22:42:48
 * @Description: 作用
 * @FilePath: /demo/src/class.ts
 */
class Dog {
  constructor(name: string) {
    this.name = name;
  }
  // 在构造函数中初始化的属性, 可以不指定默认值
  // name: string;
  name: string = '';
  eat(){console.log('bone');
  }
}
// 对象的方法绑定在原型上
console.log(Dog.prototype);
// 对象的属性会绑定在实例上
const Husky = new Dog('FeiYang');
console.log(Husky);


// class Animal {
//    private constructor() {
    
//   }
// }
// class Cat extends Animal {
//   constructor() {
//     super();
//   }
// }
// const animal = new Animal()

// class Animal {
//   constructor() {}
//   protected leg: number = 4;
// }
// class Cat extends Animal {
//   constructor() {
//     super();
//   }
//   leg: number = 2;
// }
// const animal = new Animal();
// animal.leg

// class Animal {
//   constructor(public name: string) {}
//   name: string = ''
// }

class Animal {
  constructor() {}
  static age: number = 18;
}

Animal.age
const animal = new Animal();
// animal.age error
// class Cat extends Animal {
//   constructor(parameters) {
//     super();
//   }
//   sayAge() {
//     console.log(this.age);
    
//   }
// }
// Cat.age