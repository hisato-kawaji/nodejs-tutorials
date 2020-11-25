// async, await

async function t() {
  console.log('t start')
  setTimeout(console.log, 2000, 't end')
}

t()

// t().then(() => {
//   console.log(1)
// })

async function f() {
  console.log('f start')
  await t()
  setTimeout(console.log, 5000, 'f end')
}

f()
