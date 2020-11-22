// Promiseを使ってわかる効果

const y = (a, b) => {
  console.log('a: %s', a);
  console.log('b: %s', b);
  return new Promise((callback) => {
    setTimeout(() => {
      console.log('b callback: %s', b);
      callback(a + '(' + b + ')');
    }, 200)
  })
}


y('', 'x')
  .then((p) => y(p, 'y'))
  .then((p) => y(p, 'z'))
  .then((p) => console.log(p))
