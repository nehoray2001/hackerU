(function () {
  const isVictorCrazy = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (true) resolve("Victor is crazy! no doubt about it!");
      }, 3000);
    });
  };

  async function askQuestion() {
    try {
      const answer = await isVictorCrazy(); // await wait for the promise to resolve
      console.log(answer);
    } catch (error) {
      console.log(error);
    }
  }

  askQuestion();
  console.log("working code...");

  // class ex: - async await
  // 1. create a function named compareToTen, accepts a number as a parameter (num)
  // the function return a Promise which:
  // if the num > 10, resolve with the string "YAY!"
  // if the num <= 10, reject with the string "NAY!"
  // use random number between 1-20 to test your function

  function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num > 10) {
        resolve("YAY!");
      } else {
        reject("NAY!");
      }
    });
  }
  //send random number in range 1-20 to the compareToTen(num)
  let num = Math.floor(Math.random() * 20) + 1;
  console.log(compareToTen(num));

  // 2. create a function named arrayCounter which accepts an array (arr) as a parameter
  // the function return a Promise which:
  // if the array length is less than 5, reject with the string "array is too short"
  // if the array length is more/equal than 5, resolve with the string "array is too long"
  // declare a variable that named 'data' (const data = [1,2,3,4,5,6,7,8,9,10])
  // invoke the arrayCounter function and pass the variable 'data' as a parameter
  // use async await to handle the promise
  // the handle should go like this:
  // if the promise is resolved, create a list on the DOM with the array elements
  // if the promise is rejected, write a error message in an alert

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function arrayCounter(array) {
    return new Promise((resolve, reject) => {
      if (array.length < 5) {
        reject("array is too short");
      } else {
        resolve("array is too long");
      }
    });
  }

  async function doQTwo() {
    try {
      const tryCounter = await arrayCounter(data);
      console.log(tryCounter);
    } catch (err) {
      console.log(err);
    }
  }

  doQTwo();

  // 3. create two Promise objects (p1, p2) which:
  // both promises will resolve after a second.
  // p1 will resolve with the string "p1"
  // p2 will resolve with the string "p2"

  // the order of the code chan change.
  // how can you make sure the print order is the same as the promises order?
  // (p1 then p2)
  // don't use async await* 😉

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1");
    }, 1000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2");
    }, 1000);
  });

  p1.then((res) => {
    console.log(res);
    return p2;
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  /*
#### 4. create a function named getDog which accepts a number as a parameter (num)
   * the function return a Promise which:
   * if the num is even, resolve with the string "dog"
   * if the num is odd, reject with the string "cat"
   * use async await to handle the promise
   * the handle should go like this:
       * if the promise is resolved, write a success message in an alert
       * if the promise is rejected, write a error message in an alert 
   * use random number between 1-20 to test your function
 */

  num = Math.floor(Math.random() * 20) + 1;
  function getDog(num) {
    return new Promise((resolve, reject) => {
      if (num % 2 === 0) {
        resolve("dog");
      } else {
        reject("cat");
      }
    });
  }

  async function doQFour() {
    try {
      const dogo = await getDog(num);
      console.log(dogo);
    } catch (err) {
      console.log(err);
    }
  }

  /*
  #### 5. do the same as the previous exercise (4), but...
   * this time the random number should be resolved from a Promise object
   * create a function named getRandom which accepts a number as a parameter (num)
   * the function return a Promise that will resolve after 1 second.
   * the Promise will contain a random number between 0 and the number passed to getRandom function (num);

   * use `.then` to chain the result from the getRandom function to the getDog function.
   * after you succeeded with the `.then` chain, try to do the same with `async await`
  */

  // Worng!!!
  num = Math.floor(Math.random() * 20) + 1;
  function getRandom(num) {
    const rnd = Math.floor(Math.random() * num);
    return new Promise((resolve, reject) => {
      resolve(rnd);
    });
  }

  const promRnd = getRandom(num);

  promRnd
    .then((res) => {
      return getDog(res);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  //same but async

  async function doQFive() {
    try {
      const rndProm = getRandom(num);
      console.log(rndProm);
      const dogProm = getDog(rndProm.data);
    } catch (err) {
      console.log(err);
    }
  }
})();
