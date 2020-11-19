function regular() {
    return this
}
const arrow = () => {
    return this
}

const obj = {}

console.log(regular.bind(obj)() === obj)
console.log(arrow.bind(obj)() === obj)

console.log(regular.apply(obj) === obj)
console.log(arrow.apply(obj) === obj)

console.log(regular.call(obj) === obj)
console.log(arrow.call(obj) === obj)
