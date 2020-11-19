// builtin関数

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects
const [a, b, c] = [1.23, 1.7, -18.66]
console.log(Math.ceil(a))
console.log(Math.ceil(b))
console.log(Math.ceil(c))

console.log('ceil')
console.log(Math.ceil(a))
console.log(Math.ceil(b))
console.log(Math.ceil(c))

console.log('floor')
console.log(Math.floor(a))
console.log(Math.floor(b))
console.log(Math.floor(c))

console.log('round')
console.log(Math.round(a))
console.log(Math.round(b))
console.log(Math.round(c))

console.log('abs')
console.log(Math.abs(a))
console.log(Math.abs(b))
console.log(Math.abs(c))

console.log('pow')
console.log(Math.pow(a, 2))

console.log('sqrt')
console.log(Math.sqrt(a))
console.log(Math.sqrt(b))
console.log(Math.sqrt(c))

console.log('random')
console.log(Math.random())

console.log('array')
const l = [17,2,13,5,7,11,3,1]
l.pop()
console.log(l)
l.push(19)
console.log(l)
l.sort()
console.log(l)
l.sort((a, b) => {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
})
console.log(l)
l.reverse()
console.log(l.length)
console.log(l.indexOf(5))

console.log('string')
const str = ' ba sdbw re '
console.log(str)
console.log(str.indexOf('b'))
console.log(str.slice(4))
console.log(str.split(' '))
console.log(str.match('asd'))
console.log(str.replace('re', 'kkk'))
console.log(str.trim())
console.log(str.includes('sd'))
console.log(str.repeat(3))
