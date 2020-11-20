// Proxy, (Reflect)
// get
// set
// has
// deleteProperty
// apply
// construct
// getOwnPropertyDescriptor
// defineProperty
// getPrototypeOf
// setPrototypeOf
// enumerate
// ownKeys
// preventExtensions
// isExtensible


const a = {};
const b = {
  get: function (receiver, param) {
    return `${param} is assigned`;
  }
}

const p = new Proxy(a, b)
console.log(p)
console.log(p.q === 'q is assigned')

// 普通の関数
const x = function () { return 'x' };
const y = {
  apply: function (receiver, ...args) {
    return 'y'
  }
}

const z = new Proxy(x, y)
console.log(z() === 'y')


const u = {}

Reflect.set(u, 'a', 'b')

console.log(u.a)
