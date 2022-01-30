function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - (4*a*c);
  if (discriminant > 0) {
    arr.push((-1*b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-1*b - Math.sqrt(discriminant) )/(2*a));
  } else if(discriminant == 0) {
    arr.push((-1*b)/(2*a));
  } else if (discriminant < 0) {
    console.log("Дискриминант меньше 0. Корней нет.")
  }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
