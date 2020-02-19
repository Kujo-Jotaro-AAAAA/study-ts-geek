/*
 * @Author: LaoZhang
 * @Date: 2020-02-15 09:31:37
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-02-19 09:23:04
 * @Description: 作用
 * @FilePath: /geekbang/demo/src/advance.ts
 */
// let a: string = 'a';
// a = null;

// interface X {
//   a: any;
// }
// interface Y {
//   a: any;
//   b: any;
// }
// let x:X = {a: 1};
// let y:Y = {a: 1, b: 1};
// // ok
// x = y

// error
// y = x

/**
 * * 函数兼容
 */
// let x = (x: number, y: number, z: number) => {};
// let y = (x: number, y?: number) => {};
// let z = (...rest: number[]) = {};
// x = y;
// x = z;
// y = x;
// y = z;
// z = x;
// z = y;

// let x = (x: number) => {};
// let y = (y: number) => {};
// // let y = (y: string) => {};
// // let y = (y: any) => {};
// x = y;

// interface XParams {
//   a: number;
// }
// interface YParams {
//   a: number;
//   b: number;
// }
// let x = (x: XParams) => {};
// let y = (y: YParams) => {};
// x = y; // error
// y = x;

// let x = () => ({x: ''});
// let y = () => ({y: 1});
// let z = () => ({y: 1});

// // error
// x = y
// y = z;

/**
 * 类型保护
 */
class Java {
  sayJava(){}
}
class JavaScript {
  sayJavaScript(){}
}
function getlang(param: Java | JavaScript) {
  // error 
  // param.sayJava

  // 1. instanceof
  // if (param instanceof Java) {
  //   param.sayJava
  // } else {
  //   param.sayJavaScript
  // }

  // 2. in
  // if ('sayJava' in param) {
  //   param.sayJava
  // }

  // 4 实现
  if (isJava(param)) {
    param.sayJava()
  }
}
// 3. typeof
function getType(x: string | number) {
  if ( typeof x === 'string') {
    console.log(x.length);
  } else {
    console.log(x.toFixed(2));
  }
}
// 4 通过类型位词 is 自己实现判断函数
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).sayJava !== undefined
}

// interface Str {
//   x: string;
// }
// interface Num {
//   y: number;
// }

// const obj : Str & Num = {
//   x: 'a',
//   y: 1
// }

// let a: number | string = 'a';
// let b: 'x' | 'y' | 'z' = 'x';
// let c: 1 | 2 | 3 = 1;

// 索引类型
interface Obj {
  a: number,
  b: number,
  c: number,
}
// const obj: Obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// const obj1 = {
//   f: 1,
//   e: 2,
// }
// Object.keys(obj).map(key => {
//   let val = obj[key];
// })

// error 不是这样用
// Object.keys(obj).map((key: keyof Obj) => {
//   let val = obj[key];
//   return val;
// })

// 1 keyof, 索引类型查询操作符
 let key: keyof Obj;
// 2 索引访问操作符
//  let b: Obj['b'];

//  3.  T extends U 泛型约束, 表示泛型 T 继承泛型 U 里的一些值

// function getValue<T, U extends keyof T>(obj: T, keys: U[]): T[U][] {
//   return keys.map(key => {
//     let val = obj[key];
//     return val;
//   })
// }
// getValue(obj, ['a','b','c'])
// getValue(obj1,['f'])

// Object.keys(obj).map(key => {
//   let val = obj[key]
// })

interface Obj {
  a: string;
  b: number;
  c: boolean;
}
// 生成全部只读的类型
type ReadonlyObj = Readonly<Obj>;

// 生成全部可选的类型
type PartialObj = Partial<Obj>;

// 抽取某几个属性
type PickObj = Pick<Obj, 'a' | 'b'>;

type RecordObj = Record<'d' | 'e', string>;

type ex = NonNullable<Obj>

type ConditionType<T> = T extends string ? 'a' : 1;
type ConditionStr = ConditionType<string>
type ConditionNum = ConditionType<number>
