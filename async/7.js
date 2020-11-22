// async, await

async function t() {
  console.log('t start')
  setTimeout(() => 0, 1000)
  console.log('t end')
}

t()

// t().then(() => {
//   console.log(1)
// })

async function f() {
  console.log('f start')
  await t()
  setTimeout(() => 0, 1000)
  console.log('f end')
}

f()
