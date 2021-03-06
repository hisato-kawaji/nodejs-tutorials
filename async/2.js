// thenとresolve, reject

const isNum = (a) => {
  console.log('isNum is called')
  return new Promise(
    (callback, error) => {
      if (typeof a === 'number') {
        callback(a)
      } else {
        error(a)
      }
    }, 200
  )
}

function onSuccess(p) {
  console.log(p)
  // どこで中断させるかを条件を変更してみるといいかもしれない
  if (p > 7) return isNum(p.toString())
  return isNum(p * 2)
}

function onFail(p) {
  console.log(typeof p)
  console.log(p)
  console.log('error!')
  return Promise.reject(p)
  return p
}

isNum(1).then(
  onSuccess, onFail
).then(
  onSuccess, onFail
).then(
  onSuccess, onFail
).then(
  onSuccess, onFail
).then(
  onSuccess, onFail
)

// 失敗例
//isNum('1').then(
//  onSuccess, onFail
//)
