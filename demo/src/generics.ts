/*
 * @Author: LaoZhang
 * @Date: 2020-02-13 23:56:04
 * @LastEditors  : LaoZhang
 * @LastEditTime : 2020-02-14 13:49:37
 * @Description: 作用
 * @FilePath: /demo/src/generics.ts
 */
function log<T>(value: T): T {
    console.log(value);
    return value;
}
log<string[]>(['a', ',b', 'c'])
log(['a', ',b', 'c'])

// type Log = <T>(value: T) => T
// let myLog: Log = log

// interface Log<T> {
//     (value: T): T
// }
// let myLog: Log<number> = log
// myLog(1)

class Log<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}
let log1 = new Log<number>()
log1.run(1)
let log2 = new Log()
log2.run({ a: 1 })

interface Length {
    length: number
}
function logAdvance<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}
logAdvance([1])
logAdvance('123')
logAdvance({ length: 3 })

// class Tom<T> {
//     run(num: T) {
//         console.log(num);
//     }
// }
// const t = new Tom();
// // const t = new Tom<number>();
// t.run('asd')


interface Length {
    length: number;
}
class Tom<T extends Length> {
    run(strs: T) {
        console.log(strs.length);
    }
}
const t = new Tom();
t.run('a');
t.run(['a', 'b', 'c']);



let arr = [1,null, 'a'];
let n = null;

// window.onkeydown = (e: KeyboardEvent) => {
//     e.
// }

interface API {
    id: number;
}
let api = {} as API;