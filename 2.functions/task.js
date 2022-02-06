// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = sum/arr.length;
  avg = +avg.toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
// part 1
function worker(arr) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let sum;
  for (let i=0; i<arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
  if (sum > max) {
    max = sum;
  }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = getArrayParams(arr).max;
  let min = getArrayParams(arr).min;
  return max-min;
}
