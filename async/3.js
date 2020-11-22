// thenとresolve, reject

const isNum = (a) => {
  return new Promise(
    (callback, error) => {
      setTimeout(() => {
        if (typeof a === 'number') {
          callback(a)
        } else {
          error(a)
        }
      }, 200)
    }
  )
}

function onSuccess(p) {
  console.log(p)
  // success時にわざと文字列型に変更する
  q = p.toString()
  return isNum(q)
}

function onFail(p) {
  console.log(typeof p)
  console.log(p)
  console.log('error!')
  return Promise.reject(p)
}

isNum(1).then(
  onSuccess
).then(
  onSuccess
).then(
  onSuccess
).catch(onFail)

