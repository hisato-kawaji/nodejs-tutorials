const a = 123
const b = "aiu"
const c = true

console.log(a)
console.log(a.toString())

// 非推奨(Newする意味がない)
const a2 = new Number(123)
const b2 = new String("abc")
const c2 = new Boolean(true)

// 型変換
console.log(a)
console.log(a.toString())
console.log(c)
console.log(c.toString())

const p = 0
const q = '0'
const r = "0"
console.log(p == q)
console.log(q == r)
console.log(r == p)
console.log(p === q)
console.log(q === r)
console.log(r === p)

console.log('型変換')
console.log(p.toString() === q)
console.log(r === p.toString())

console.log('型変換その2')
console.log(Boolean(p) === Boolean(q))
console.log(Boolean(q) === Boolean(r))
console.log(Boolean(r) === Boolean(p))
console.log(Boolean(p))
console.log(Boolean(q))
console.log(Boolean(r))

console.log('型変換その3')
console.log(Number(p) === Number(q))
console.log(Number(q) === Number(r))
console.log(Number(r) === Number(p))


console.log('null undefined')
console.log(null == undefined)
console.log(null === undefined)


