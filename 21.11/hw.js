(function (window, document) {
  //Q1
  function indexMultiplier(array) {
    let res = 0;
    if (!array.length) {
      for (let index = 0; index < array.length; index++) {
        res += array[index] * index;
      }
      return res;
    }
    return 0;
  }

  //Q2
  function findNemo(str) {
    const array = str.split(" ");
    for (let index = 0; index < array.length; index++) {
      if (array[index] === "Nemo") {
        return `I found Nemo at ${index}`;
      }
    }
    return "I can't find Nemo";
  }

  //Q3
  function clone(array) {
    return array.concat(array);
  }

  //Q4
  function compact(array) {
    let tempArr = clone(array);
    for (let index = 0; index < tempArr.length; index++) {
      if (
        tempArr[index] === false ||
        tempArr[index] === null ||
        tempArr[index] === 0 ||
        tempArr[index] === ""
      ) {
        tempArr[index].splice(index, 1);
        index--;
      }
    }
    return tempArr;
  }
})(window, document);
