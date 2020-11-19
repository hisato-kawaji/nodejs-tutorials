function aaa(a, b) {
  console.log(a, b)
}

aaa(1)
aaa(1, 2, 3) //=> 1 2

// アロー関数ではargumentの挙動が違う
// const eee = (a, b) => {
//   console.log(arguments[0])
//   console.log(arguments[1])
//   console.log(arguments[2])
// }
// eee(1,2)
// eee(1,2,3)

function bbb(a, b) {
  console.log(arguments)
}

bbb(1, 2, 3, 4, 5)

function bbb(a, b) {
  console.log(arguments[1])
}

bbb(5, 8, 1)

function ccc(...a) {
  console.log(a)
}

ccc(1,2,3,4,5)

function ddd(...a) {
  console.log(...a)
}

ddd(1,2,3,4,5)
