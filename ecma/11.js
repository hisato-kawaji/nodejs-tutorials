// instance

function Obj(p1, p2) {
  this.p1 = p1
  this.p2 = p2
  this.getParam = function() {
    console.log(this.p1)
    console.log(this.p2)
  }
}

const obj1 = new Obj(2, 3)
obj1.getParam()


// getParamを各インスタンスでいちいち生成しない方法

function Obj2(p1, p2) {
  this.p1 = p1
  this.p2 = p2
}

Obj2.prototype.getParam = function() {
    console.log(this.p1)
    console.log(this.p2)
}

const obj2 = new Obj2(5, 7)
obj2.getParam()

console.log(obj2.__proto__)
console.log(Obj2.prototype)
console.log(obj2.__proto__ === Obj2.prototype)
console.log(obj2.constructor)
console.log(Obj2.prototype.constructor)


console.log(obj1 instanceof Obj)
console.log(obj2 instanceof Obj)
