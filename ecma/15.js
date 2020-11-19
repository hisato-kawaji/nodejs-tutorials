// try catch

try {
  throw new Error('a')
// 例外の条件を書くときの例
// } catch(e if e == "InvalidNameException") {
// }
} catch(e) {
  console.log(e)
} finally {
  console.log('b')
}
console.log('c')
