let a = new Map()
a.set('a', 1)
console.log(a.size)
console.log(a)
console.log(a.get('a'))
console.log(a.get('b'))
console.log(a.has('a'))
console.log(a.has('c'))

a.set('a', 4)
a.set('b', 2)
a.set('c', 3)

console.log(a)
// a = new Map(['a', 4], ['b', 2], ['c', 3]) と等価

const results = [];
a.forEach((value, key) => {
    results.push(`${key}:${value}`)
})
// 下記も結果は同じだが処理が少し違う
// for (const [key, value] of a.entries()) {
//     results.push(`${key}:${value}`)
// })
// for (const [key, value] of map) {
//     results.push(`${key}:${value}`)
// })
// keyだけを行う場合
//for (const key of map.keys()) {
//    result.push(key);
//}

console.log(results)

a.delete('a')
console.log(a)
a.clear()
console.log(a)

let p = new Set()
p.add('a')
console.log(p.size);
console.log(p);
console.log(p.has('a'))
console.log(p.has('b'))

p.add('a')
p.add('b')
p.add('c')
console.log(p)
// p = new Set(['a', 'b', 'c'])と等価

results = [];
p.forEach((value) => {
    results.push(value)
});

// 下記はループ処理の他の書き方、結果も少し異なる
//results = [];
//for (const value of set.keys()) {
//    results.push(value)
//}
//results = [];
//for (const entry of set.entries()) {
//    // entryは[値, 値]という配列
//    results.push(entry)
//}
//results = [];
//for (const value of set) {
//    results.push(value)
//}
console.log(results)


// ちなみにfor..inも存在する(割愛)
