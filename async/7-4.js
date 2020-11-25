// async, await

async function a(p) {
  console.log(p + ' msec task, a start')
  setTimeout(console.log, p, p + ' msec wait, a end')
  return p * 2
}

async function b(q) {
  console.log(q + ' msec task, b start')
  setTimeout(console.log, q, q + ' msec wait, b end')
  throw new Error('error')
  return q * 2
}

a(2).then(a).then(a).then(b).then(a).catch((e) => console.log(e))
//a(2).then(a).then(b).then(a).catch((e) => console.log(e)).then(a)
