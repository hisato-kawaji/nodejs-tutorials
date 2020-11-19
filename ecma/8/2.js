// arrow関数との違いその２

function regular() {
  console.log(1)
}
const arrow = () => {
  console.log(2)
}

new regular()

//error
//new arrow()

class Foo extends regular {}

//error
//class Bar extends arrow {}
