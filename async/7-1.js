// async, await

async function t(p) {
  console.log(p + ' msec task, t start')
  setTimeout(console.log, p, p + ' msec wait, t end')
}

// t().then(() => {
//   console.log(1)
// })

async function f() {
  console.log('f start')
  await t(200)
  await t(500)
  setTimeout(console.log, 0, 'f is in process')
  await t(1000)
  await t(2000)
  setTimeout(console.log, 5000, 'f end')
}

f()
