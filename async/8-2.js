// async,awaitとPromiseの挙動

const x = () => {
    console.log('x start');
    a1()
    console.log('x end');
}
const a1 = async () => {
    console.log('a1 start')
    p
    console.log('a1 end')
}
const a2 = async () => {
    console.log('a2 start')
    setTimeout(console.log, 5000, 'a2 is in processing')
    console.log('a2 end')
}
const p = new Promise(resolve => {
    console.log('p start')
    a2()
    console.log('p end')
})

x()
