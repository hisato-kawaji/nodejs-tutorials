const hoge = {}

hoge.fuga = 'fuga'
hoge.a = 2
hoge.getFuga = function() {
  return hoge.fuga
}
console.log(hoge)
console.log(hoge.fuga)
console.log(hoge.a)
console.log(hoge.getFuga)
console.log(hoge.getFuga())
