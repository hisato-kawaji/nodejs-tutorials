// async, await

async function p(p) {
  console.log(p + ' msec task, p start')
  setTimeout(console.log, p, p + ' msec wait, p end')
}

function f() {
  // 通常の関数ではawaitは使えない
  // await p(200)
  p(200)
  p(500)
  setTimeout(console.log, 0, 'f is in process')
  p(1000)
  p(2000)
  setTimeout(console.log, 5000, 'f end')
}

f()
