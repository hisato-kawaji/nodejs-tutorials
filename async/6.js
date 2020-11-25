// 同期処理を可視化

const a = [1, 3, 5, 7, 11, 13]
const b = ['a', 'b', 'c', 'd', 'e', 'f']

const c = (p) => console.log(p + ' is in processing')

for (x of a) {
  c(x)
}
console.log(a)
for (y of b) {
  c(y)
}
console.log(b)
