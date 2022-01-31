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
  if (percent < 0 || isNaN(percent) || percent === "") {
    return `Параметр "Процентная ставка" содержит неправильное значение \"${percent}\"`;
  } else if (contribution < 0 || isNaN(contribution) || contribution === "") {
    return `Параметр "Начальный взнос" содержит неправильное значение \"${contribution}\"`;
  } else if (amount < 0 || isNaN(amount) || amount === "") {
    return `Параметр "Общая стоимость" содержит неправильное значение \"${amount}\"`;
  } else if (new Date > date || date === ""|| isNaN(date)) {
    return `Параметр date содержит неправильное значение ${date}`;
  }

  let S;
  let themoment;
  let P = percent/(12*100);
  let oneMonthImMsec = 31536000000/12;
  let months = Math.round((date.getTime() - new Date().getTime())/oneMonthImMsec);
  let monthFee = (amount - contribution) * (P + P/(((1 + P)** months)-1));
   totalAmount = monthFee * months;
    return Number(totalAmount.toFixed(2));
}
