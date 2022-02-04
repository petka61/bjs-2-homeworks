// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = [];
  let avg;
  for (let i = 0; i < arr.length; i++) {
    sum = Number(sum) + arr[i];
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
  let sum = [];
  for (let i=0; i<arr.length; i++) {
    sum = Number(sum) + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = [];
  for (let i=0; i<arrOfArr.length; i++) {
  max.push(worker(arrOfArr[i]))
  }
  return Math.max.apply(null, max);
}

// Задание 3
function worker2(arr) {
  return getArrayParams(arr).max - getArrayParams(arr).min;
}
