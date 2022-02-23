function parseCount(value) {
  if (isNaN(value)) {
    throw Error("Невалидное значение");
  } else {
    return Number.parseInt(value);
  }
}

function validateCount(value) {
  try {
    return parseCount(value)
  } catch (value){
    return (value);
  }
}

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (side1 + side2 < side3 || side1 + side3 < side2 || side3 + side2 < side1) {
      throw Error("Треугольник с такими сторонами не существует");
    }
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
  getArea() {
    const halfPerimeter = 0.5 * this.getPerimeter();
    return parseFloat(Math.sqrt(halfPerimeter*(halfPerimeter - this.side1) * (halfPerimeter - this.side2) * (halfPerimeter - this.side3)).toFixed(3));
  }
}

let getTriangle = function(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3);
  } catch(e) {
    return {
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}
