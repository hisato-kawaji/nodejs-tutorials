// 非同期処理を可視化

const a = [1, 3, 5, 7, 11, 13]
const b = ['a', 'b', 'c', 'd', 'e', 'f']

const isNum = (a) => {
  return new Promise(
    (callback, error) => {
      setTimeout(() => {
        callback(a)
      }, 1000 + 3000 * Math.random())
    }
  )
}

function onSuccess(p) {
  console.log('Success')
  console.log(p)
  return p * 2
}

Promise.all(a.map((p) => {
  return isNum(p)
})).then((p) => console.log(p))

Promise.all(b.map((p) => {
  return isNum(p)
})).then((p) => console.log(p))
