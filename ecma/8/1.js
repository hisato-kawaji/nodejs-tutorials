function regular() {
    return this
}
const arrow = () => {
    return this
}

const lexicalThis = this
console.log(regular())

const obj = { method: regular }
console.log(obj.method() === obj)
console.log(arrow() === lexicalThis)

const obj2 = { method: arrow }
console.log(obj2.method() === obj2)
console.log(obj2.method() === lexicalThis)

