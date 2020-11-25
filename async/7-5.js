// async, await

async function p(p) {
  console.log(p + ' msec task, p start')
  setTimeout(console.log, p, p + ' msec wait, p end')
  return p * 2
}

async function f() {
  // 通常の関数ではawaitは使えない
  // await p(200)
  await p(200)
  await p(500)
  setTimeout(console.log, 0, 'f is in process')
  await p(1000)
  await p(2000)
  setTimeout(console.log, 5000, 'f end')
}

f().then(() => console.log('finish'))
