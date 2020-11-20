// 関数宣言, allow関数

function aaa(a) {
  console.log(a)
}

aaa(1)

// 上書きができてしまう
// function aaa(a){
//   console.log('hoge')
// }
// aaa(1)

const a = function() {
  console.log('a')
}

a // 何も起きない

a()
// 引数として関数を渡すことができる（コールバック）
function b(a) {
  a()
}

b(a)
// b(a())とするとエラーになる

console.log(a.p)
a.p = '111'
console.log(a.p)

const test = {
  name: 'hoge',
  fuga() { return 'fuga' }
}

test.fuga()

const test2 = {
  name: 'hoge',
  fuga() {
    const inner = () => {
      return this.name
    }
    return `${inner()},fuga`
  }
}

test2.fuga()


const c = () => {
  console.log('c')
}

// 下記と等価(１つの式のみで構成できる場合に限る)
//const c = () => console.log('c')

c()
c.hoge = 1
console.log(c)

const d = (key) => {
  console.log(key)
}
d(1)

function k(a = 1) {
  console.log(a + 1)
}

k(4)
k()

const f = () => ({ foo: 1 })
console.log(f())

const sqrt = x => x * x
cosole.log(squared(3))
