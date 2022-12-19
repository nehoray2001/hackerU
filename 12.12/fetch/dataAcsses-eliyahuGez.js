/* create an async function named fetchData which accepts a url as a parameter (url) and return a Promise, the Promise will resolve with the data from the url. (use fetch api)
put this function in a file called dataAccess.js, and export it
in the main module (the file being referenced in the html file) import the function and use it to fetch data from the /users route
print the data to the console, so you'll know it was received */

export async function fetchData(url) {
  url = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (response) => response.json()
  );

  return new Promise((resolve, reject) => {
    resolve(url);
  });
}
export async function fetchDataPost(url) {
  url = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (response) => response.json()
  );

  return new Promise((resolve, reject) => {
    resolve(url);
  });
}
export const dataFetch = await fetchData().then((response) => response);
export const dataFetchPost = await fetchDataPost().then((response) => response);

export async function createUserHtmlElement(dataFetch, dataFetchPost) {
  const res = console.log(dataFetch, dataFetchPost);
  const container = document.createElement("div");
  container.classList.add("container");
  const containerAdd = document.body.appendChild(container);
  const row = document.createElement("div");
  row.classList.add("row", "d-flex", "justify-content-center");
  const rowAdd = containerAdd.appendChild(row);

  dataFetch.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card", "col-4");
    card.style.width = "20rem";
    const cardAdd = rowAdd.appendChild(card);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const cardBodyAdd = cardAdd.appendChild(cardBody);
    const h5 = document.createElement("h5");
    h5.classList.add("card-title", "btn", "container-xxl", "btn-primary");
    const h5Add = cardBodyAdd.appendChild(h5);
    h5.style.backgroundColor = "black";
    h5.textContent = user.name;
    const img = document.createElement("img");
    img.classList.add("img-img", "card-img-top");
    const randomNum = Math.floor(Math.random() * 100);
    img.src = `https://randomuser.me/api/portraits/men/${randomNum}.jpg`;
    h5Add.appendChild(img);
    const p = document.createElement("p");
    p.classList.add("card-text");
    const pAdd = cardBodyAdd.appendChild(p);
    const pTextDiv = document.createElement("div");
    pTextDiv.style.backgroundColor = "#FFEBCD";
    pTextDiv.style.fontWeight = "bold";
    pTextDiv.style.opacity = 0.5;
    pTextDiv.classList.add("dropdown-menu");
    const pTextDivAdd = pAdd.appendChild(pTextDiv);
    pTextDiv.innerHTML =
      user.username +
      "<br>" +
      user.email +
      "<br>" +
      "Address : " +
      user.address.street +
      " " +
      user.address.suite +
      " " +
      user.address.city +
      "<br>" +
      user.phone +
      "<br>" +
      user.website +
      "<br>" +
      "Company : " +
      user.company.name +
      " " +
      user.company.catchPhrase;
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-primary");
    btn.innerHTML = "Info";
    const btnPost = document.createElement("button");
    btnPost.classList.add("btn", "btn-primary");
    btnPost.innerHTML = "Post";
    const btnAdd = cardBodyAdd.appendChild(btn);
    const btnPostAdd = cardBodyAdd.appendChild(btnPost);
    dataFetchPost.forEach((post) => {
      if (user.id === post.userId) {
        const divPost = document.createElement("div");
        const AddDivPost = container.appendChild(divPost);
        divPost.classList.add("dropdown-menu");
        // 'd-flex', 'align-items-stretch',
        divPost.classList.add(`userPost${post.userId}`);

        divPost.innerHTML +=
          post.userId + "<br>" + post.title + "<br>" + post.body;
        btnPostAdd.addEventListener("click", () => {
          const checkClassForDivPost = divPost.classList.contains(
            `userPost${post.userId}`
          );

          if (checkClassForDivPost === true) {
            divPost.classList.remove("dropdown-menu");
          } else {
            divPost.classList.add("dropdown-menu");
          }

          console.log("hey");
        });
      }
    });

    btn.addEventListener("click", () => {
      const checkClass = pTextDiv.classList.contains("dropdown-menu");
      if (checkClass === true) {
        pTextDiv.classList.remove("dropdown-menu");
      } else {
        pTextDiv.classList.add("dropdown-menu");
      }
    });

    btn.addEventListener("mouseover", () => {
      btn.classList.add("btn-secondary:hover");
    });
    btn.addEventListener("mouseleave", () => {
      btn.classList.remove("btn-secondary:hover");
    });
  });
}
