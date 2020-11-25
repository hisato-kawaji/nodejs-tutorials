// Promiseの基礎
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise

const isNum = (a) => {
  return new Promise(
    (callback, error) => {
      if (typeof a === 'number') {
        callback(a);
      } else {
        error(a);
      }
    }
  )
}

isNum(1).then(
  p => { console.log(p) },
  error => {
    console.log(typeof error)
    console.log(error)
    console.log('error!')
  }
)

isNum('1').then(
  p => { console.log(p) },
  error => {
    console.log(typeof error)
    console.log(error)
    console.log('error!')
  }
)
