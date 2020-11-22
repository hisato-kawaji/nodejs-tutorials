// async,awaitとPromiseの挙動

const x = () => {
    console.log('x start');
    a1()
    console.log('x end');
}
const a1 = async () => {
    console.log('a1 start')
    await a2()
    console.log('a1 end')
}
const a2 = async () => {
    console.log('a2 start')
    await p
    console.log('a2 end')
}
const p = new Promise(resolve => {
    console.log('p start')
    setTimeout(resolve, 1000)
    console.log('p end')
})

x()
