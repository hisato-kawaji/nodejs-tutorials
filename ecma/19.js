// ジェネレータ, 三項演算子
const result = true ? "true!" : "false"
console.log(result)


function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen()
for(const num of g) console.log(num);

function* gen2(){
    const a = yield 0;
    yield* [1, a, 10];
}

var g2 = gen2(); // ジェネレータを作った。この時点ではまだ関数の中身は実行されない

console.log( g2.next())
console.log( g2.next())
console.log( g2.next())
console.log( g2.next(8))
console.log( g2.next())
console.log( g2.next())
console.log( g2.next(5))


const fibonacci = {
   [Symbol.iterator]: function*() {
     var pre = 0, cur = 1;
     while (cur < 100000) {
       var temp = pre;
       pre = cur;
       cur += temp;
       yield cur;
     }
   }
 }

for (var n of fibonacci) {
  // 1000で終了
  if (n > 1000)
    break;
  console.log(n);
}
