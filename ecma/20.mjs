// import,export(コンソールの都合により、mjsファイルとして実行が必要)
// →のコマンドで実行すること　node --experimental-modules 20.mjs
// もっと細かい解説はこちらを参照した方がいいかも　https://ja.javascript.info/import-export

// 本来的には拡張子は省略化（コンソール上の実行の都合）
import { ppp } from './20/sample.mjs'
import * as Sample from './20/sample2.mjs'
import {aaa, bbb } from './20/sample3.mjs'
import mmm from './20/sample4.mjs'

ppp()

Sample.ppp()
Sample.qqq()
console.log(Sample.rrr)
aaa();
bbb();
// error
// console.log(ccc);

mmm()
