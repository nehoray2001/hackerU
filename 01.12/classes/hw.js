(function () {
  class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
    calcPerimeter() {
      console.log(
        "The length of the shape outer edge is: " + this.sides * this.sideLength
      );
    }
  }

  const square = new Shape("Square", 4, 5);
  square.calcPerimeter();

  const triangle = new Shape("triangle", 3, 3);
  triangle.calcPerimeter();

  class Square extends Shape {
    constructor(sideLength) {
      super("square", 4, sideLength);
    }
    calcArea() {
      console.log("The square area is: " + this.sideLength * this.sideLength);
    }
  }

  const squarTwo = new Square(5);
  squarTwo.calcArea();
  squarTwo.calcPerimeter();
})();
