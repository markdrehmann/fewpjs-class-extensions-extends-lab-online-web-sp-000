class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    function addAll(total, num) {
      return total + num;
    }
    return this.sides.reduce(addAll, 0)
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return false;
    if (this.count !== 3) return false;
    let s1 = this.sides[0]
    let s2 = this.sides[1]
    let s3 = this.sides[2]
    return ((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1))
  }
}

class Square extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return false;
    if (this.count !== 4) return false;
    let s1 = this.sides[0]
    let s2 = this.sides[1]
    let s3 = this.sides[2]
    let s4 = this.sides[3]
    return (s1 === s2 && s1 === s3 && s1 === s4)
  }

  get area() {
    if (!Array.isArray(this.sides)) return false;
    if (this.count !== 4) return false;
    return this.sides[0] ** 2
  }
}