// 非同期処理を可視化

const a = [1, 3, 5, 7, 11, 13]
const b = ['a', 'b', 'c', 'd', 'e', 'f']

const isNum = (a) => {
  return new Promise(
    (callback, error) => {
      setTimeout(() => {
        console.log(a + 'is in processing')
        callback(a)
      }, 1000 + 3000 * Math.random())
    }
  )
}

Promise.all(a.map((p) => {
  return isNum(p)
})).then((p) => console.log(p))

Promise.all(b.map((p) => {
  return isNum(p)
})).then((p) => console.log(p))
