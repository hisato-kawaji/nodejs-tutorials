const obj = {}
const HOGE = Symbol()

obj[HOGE] = 123
obj.HOGE = 999
console.log(HOGE)
console.log(obj)

// new Symbol(); // TypeError
// new Symbol("株価暴落"); // TypeError

//下のコードでは、すべて false が返されます。
console.log(Symbol() === Symbol()) // false
console.log(Symbol("abc") === Symbol("abc")) // false

const symb = Symbol.for("key")
obj[symb] = 'hogehoge'
console.log(obj[Symbol.for("key")])
