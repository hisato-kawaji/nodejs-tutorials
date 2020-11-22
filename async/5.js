// Promise.race

const arr = [1, 3, 5, 7, 11, 13]

const isNum = (a) => {
  return new Promise(
    (callback, error) => {
      setTimeout(() => {
        if (typeof a === 'number') {
          callback(a * 2)
        } else {
          error(a)
        }
      }, 1000 + 3000 * Math.random())
    }
  )
}

function onSuccess(p) {
  console.log('Success')
  console.log(p)
  return p * 2
}

Promise.race(arr.map((p) => {
  return isNum(p)
})).then((p) => console.log(p))

