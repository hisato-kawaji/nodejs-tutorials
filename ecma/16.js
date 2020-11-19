// class, extends

let count = 0
class a {
  constructor(p,q) {
    this.p = p
    this.q = q
  }

  get getP() {
    console.log(this.p)
    return this.p
  }

  set setP(p) {
    this.p = p
  }

  static cross() {
    count++
    console.log(count)
  }

  open() {
    console.log(this.p + this.q)
  }
}

class b extends a {
  constructor(p,q) {
    super(p,q)
  }
  open() {
    console.log(this.p + this.q);
  }
}

class c extends a {
  constructor(p,q) {
    super(p,q)
  }
}

class d extends a {
  constructor(p,q) {
    super(p,q)
  }
  open() {
    console.log(this.p - this.q);
  }
}


const w = new a(1,2)
const x = new b(3,4)
const y = new c(5,6)
const z = new d(7,8)

console.log('basic class')
w.open()
a.cross()
w.getP
w.setP = 6
w.getP
w.open()

console.log('extended class')
x.open()
a.cross()
y.open()
z.open()

// abstract class や interfaceはTypeScriptの範囲なので割愛（実装すれば似たようなことはできるが）
