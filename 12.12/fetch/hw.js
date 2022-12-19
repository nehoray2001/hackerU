import { fetchData } from "./dataAccess";
(function () {
  //creating a resource
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UFT-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  console.log(fetchData("https://jsonplaceholder.typicode.com/users"));
})();
