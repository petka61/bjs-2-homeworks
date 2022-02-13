function compareArrays(arr1, arr2) {
if (arr1.length != arr2.length) {
  return false;
}
let result = arr1.every((item, index) => item === arr2[index]);

  // let result = function() {
  //   if (arr1.length == arr2.length) {
  //     for (var i in arr1) {
  //     for (var m in arr2) {
  //       if (arr1[i] === arr2[m]) {
  //         return true
  //       } else {
  //         return false
  //       }
  //     }
  //     }
  //   } else {
  //     return false;
  //   }
  // }
  // return result(); // boolean
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter((item, index) => item >= 3 && item%3 == 0).map((item) => item * 10);
  return resultArr; // array
}
