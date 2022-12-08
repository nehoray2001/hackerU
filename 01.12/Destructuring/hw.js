(function () {
  //Q1
  console.log("EXERCISE 1");

  let item = ["Egg", 0.25, 12];

  let [name, price, quantity] = item;

  console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
  console.log();

  //Q2
  console.log("EXERCISE 2");

  let numbers = [3, 5, 4, 2, 6, 1];

  let [three, five, four, two, six, one] = numbers;

  console.log(
    `One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`
  );
  console.log();

  //Q3
  console.log("EXERCISE 3");

  let user = { name: "John", years: 30 };

  // your code to the left side:
  let { names, age, isAdmin = false } = user;

  console.log(name); // John
  console.log(age); // 30
  console.log(isAdmin); // false
  console.log();

  //Q4
  console.log("EXERCISE 4");

  let person = [12, "Chris", "Owen"];

  let [ageQ4, firstName, lastName] = person;

  console.log(`Person - Age: ${ageQ4}, Name: ${firstName} ${lastName}`);
  console.log();

  //Q5
  console.log("EXERCISE 5");

  let personQ5 = ["Chris", 12, "Owen"];

  let [firstNameQ5, , lastNameQ5] = personQ5;

  console.log(`Name: ${firstNameQ5} ${lastNameQ5}`);
  console.log();

  //Q6
  console.log("EXERCISE 6");

  const students = ["Christina", "Jon", "Alexandare"];

  // Write your code here
  const [, , lastNameQ6] = students;

  console.log(lastNameQ6);
  console.log();

  //Q7
  console.log("EXERCISE 7");

  const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

  // Write your code here
  const [student1, [student2, student3], [student4, student5]] = moreStudents;

  console.log(student1, student2, student3, student4, student5);
  console.log();
})();
