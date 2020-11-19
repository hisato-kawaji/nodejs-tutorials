// this, apply, call, bind

const target = {
  a: 'hoge',
  open() { console.log(`${this.a}`) }
}

target.open()

const aaa = target.open

console.log(aaa === target.open)

aaa()

global.a = "global"
aaa()

const target2 = {
    a: 'fuga'
}

target2.open = target.open

target2.open()



const additionalVal = { a: 'hogefuga' }

target2.open.apply(additionalVal)
target2.open.call(additionalVal)

const addIdentifier = {
  b: 5,
  add(p,q) { console.log(this.b + p + q) }
}
addIdentifier.add(1,3)

const addApplyVal = { b: 7 }

addIdentifier.add.apply(addApplyVal, [2, 4])
addIdentifier.add.call(addApplyVal, 9, 10)
const b1 = addIdentifier.add.bind({b: 1})
const b2 = addIdentifier.add.bind({b: 22}, 4)
const b3 = addIdentifier.add.bind({b: 333}, 7, 8)

b1(2, 3)
b2(3)
b3()

