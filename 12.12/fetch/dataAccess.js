export async function fetchData(url) {
  const dataProm = await fetch(url);
  const dataJson = await dataProm.json();
  return new Promise((resolve, reject) => {
    resolve(dataJson);
  });
}

export const getUsers = async () => {
  return fetchData("https://jsonplaceholder.typicode.com/users)");
};

export const createCard = (user) => {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const h5 = document.createElement("h5");
  const rnd = Math.floor(Math.random() * 99) + 1;
  image.src = `https://randomuser.me/api/portraits/men/${rnd}.jpg`;
  image.classList.add("card-img-top");
  card.appendChild(image);
  h5.classList.add("card-title");
  card.appendChild(h5);
  //more code here..
  card.innerHTML += `<h3>${user.name}<h3>
  <h3>${user.email}<h3>
  <h3>${user.phone}<h3>
  <h3>${user.address}<h3>`;
  //
  //
  //
  return card;
};
