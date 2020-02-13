/*
 * @Author: LaoZhang
 * @Date: 2020-02-13 20:22:03
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-02-13 22:10:41
 * @Description: 作用
 * @FilePath: /demo/src/funtion.ts
 */
interface Demo{
  (a: number) : number;
}
interface Demo{
  (a: string) : string;
}

const demo: Demo = function (a: any): any {
  if (a instanceof Number) return 1;
  if (a instanceof String) return 'a';
}