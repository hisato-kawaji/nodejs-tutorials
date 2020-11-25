// async, await

async function p(p) {
  console.log(p + ' msec task, p start')
  setTimeout(console.log, p, p + ' msec wait, p end')
}

async function q(q) {
  console.log(q + ' msec task, q start')
  await p(q)
  setTimeout(console.log, q, q + ' msec wait, q end')
}

// t().then(() => {
//   console.log(1)
// })

async function f() {
  await q(200)
  await q(500)
  setTimeout(console.log, 0, 'f is in process')
  await q(1000)
  await q(2000)
  setTimeout(console.log, 5000, 'f end')
}

f()
