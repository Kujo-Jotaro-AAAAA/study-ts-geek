# TypeScript 实战

## TS 是什么?

[官网](https://www.tslang.cn/docs/home.html)

[基础解读](https://juejin.im/post/5cb588aa51882532c1535046)



### 强弱类型的语言

[在线编码平台](https://tool.lu/coderunner/)

> **强类型语言** : 不允许改变变量的数据类型, 除非进行强制类型转换。
>
> **弱类型语言** : 变量可以被赋值给不同的数据类型。

```java
class Untitled {
	public static void main(String[] args) {
		int x = 20;
		boolean y = true;
		x = y;
	}
}
// ==>
sandbox> timed out after 5s
Untitled.java:5: error: incompatible types: boolean cannot be converted to int
		x = y;
		    ^
1 error
Error: Could not find or load main class Untitled
Caused by: java.lang.ClassNotFoundException: Untitled
sandbox> exited with status 0
```

类型转换

```java
class Untitled {
	public static void main(String[] args) {
		int x = 20;
		char z = 'a';
		x = z;
		System.out.println(x);
	}
}
// ==>
97
```



### 动静态类型语言

> **静态类型语言** ： 在编译阶段即确定了所有变量类型
>
> **动态类型语言**：运行阶段确定所有变量类型



![]()

总之，静态比动态的效率高。



## 基础

### 构建基础的运行环境

```shell
npm i typescript -g
mkdir ts-action
cd ts-action
npm init -y
tsc --init
```

`tsc --init` : 初始化` ts.config.json`

初始化目录结构

```
├── package.json
├── src
│   └── index.ts
└── tsconfig.json
```

首次编译 `tsc ./src/index.ts`

```ts
// index.ts
let str: string = 'foo';

// => index.js 
var str = 'foo';
```

搭建一下[基础的 ts 环境](https://github.com/Kujo-Jotaro-AAAAA/typescript-base-env.git)



### 基本类型

![](./md-imgs/基础类型.png)



### 枚举类型

> 一组有名字的常量

通常是为了标记一些硬编码的变量, 使项目更具维护性。

```js
// 硬编码, 天长日久没有文档难以维护
if (a === 1) { }
else if (a === 2) {}
```

#### 数字枚举

数字枚举对应的值会递增 `+ 1`

```ts
// 数字枚举
enum Role {
    Reporter, // 0
    Developer = 2,
    Maintainer, // 3
    Owner, // 4
    Guest
}
```

反向映射实现枚举的功能

```js
var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Reporter";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintainer"] = 3] = "Maintainer";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
```



```ts
// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

// 异构枚举, 一个枚举中有不同的类型, 一般不推荐使用
enum Answer {
    N, // 0
    Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 0
enum Char {
    // const member
    a,
    b = Char.a,
    c = 1 + 3,
    // 没有给确定值的 叫 computed member (计算枚举)
  	// 计算枚举后一个枚举一定要赋值
    d = Math.random(),
    e = '123'.length,
    f = 4
}

// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar,
    Apr = Month.Mar + 1,
    // May = () => 5
}
let month = [Month.Jan, Month.Feb, Month.Mar];
// 编译后枚举的声明删去, 留下 var month= [0,1,2,3]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3
// e === f 即使值相等, 编译也会报错。

let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// e1 === e2 编译报错
// e1 === e3 ok

// 指定为 G 枚举, 取值只能在 G 枚举范围内了
let g1: G = G.b
let g2: G.a = G.a // G.a 取值只能为 G.a, 直接指定 apple 都不行

```

