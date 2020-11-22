// Promiseの基礎

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
