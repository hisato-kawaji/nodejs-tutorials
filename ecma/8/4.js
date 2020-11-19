// prototypeの挙動の違い

function regular() {}
const arrow = () => {}

console.log(typeof regular.prototype)
console.log(typeof arrow.prototype)
