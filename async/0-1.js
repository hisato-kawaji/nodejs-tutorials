// コールバック地獄

//Promiseを使わない場合
function x(p, callback) {
  console.log('p: %s', p);
  setTimeout(function () {
    console.log('p callback: %s', p);
    callback(null, '(' + p + ')');
  }, 200)
}

x('a', function (err, a) {
  x('b', function (err, b) {
    x('c', function (err, c) {
      console.log(a + b + c);
    })
  })
})

