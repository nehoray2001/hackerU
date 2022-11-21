(function (window, document) {
  //Q1.1
  function getFirstValue(arr) {
    return arr[0];
  }

  //Q1.2
  function makePair(first, secound) {
    return new Array(first, secound);
  }

  //Q1.3
  function drop(arr, end) {
    return arr.slice(0, end);
  }

  //Q1.4
  function reverse(arr) {
    let ret = [];
    for (let index = 0; index < arr.length; index++) {
      ret.unshift(arr[index]);
    }
    return ret;
  }

  //Q1.5
  function minMax(arr) {
    let min = Math.min(arr);
    let max = Math.max(arr);
    return new Array(min, max);
  }

  //Q1.6
  function search(arr, item) {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === item) {
        return index;
      }
    }
    return -1;
  }

  //Q1.7
  function canNest(arr1, arr2) {
    const minMaxArr1 = minMax(arr1);
    const minMaxArr2 = minMax(arr2);

    if (minMaxArr1[0] > minMaxArr2[0] && minMaxArr1[1] < minMaxArr2[1]) {
      return true;
    }
    return false;
  }

  //Q2.1
  function countTrue(arr) {
    let count = 0;
    //this goes on every element and check if is value is true or false
    const check = (array) => array.every((v) => v === true || v === false);
    if (!arr.length && check(arr)) {
      for (let index = 0; index < arr.length; index++) {
        if (arr[index]) {
          count++;
        }
      }
      return count;
    }
  }

  //Q2.2
  function toArray(obj) {
    let arr = [];
    for (const key in obj) {
      arr.push(makePair(key, obj[key]));
    }
    return arr;
  }

  //Q2.3
  function changeEnough(change, price) {
    const money =
      change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
    if (money >= price) {
      return true;
    }
    return false;
  }

  //Q2.4
  function arrayOfMultiples(num, length) {
    let mul = [];
    for (let index = 0; index < length; index++) {
      mul.push(num * (index + 1));
    }
    return mul;
  }
})(window, document);
