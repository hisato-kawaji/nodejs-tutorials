//即時関数、コールバックの応用

(function() {
  console.log('hogehoge')
})();

function plus(x) {
  return function(y) {
    return x + y;
  }
}

console.log(plus(3)(2))

const plusFunc = plus(3)

console.log(plusFunc(3))
console.log(plusFunc(4))
