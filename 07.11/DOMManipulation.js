(function (window, document) {
  let result = '<table border="1">';
  for (let i = 1; i <= 10; i++) {
    // 100 rows
    result += "<tr>";
    for (let j = 1; j <= 10; j++) {
      // 100 columns
      result += `<td>${i * j}</td>`;
    }
    result += "</tr>";
  }
  result += "</table>";
  document.querySelector("#loach-hakefel").innerHTML = result;

  const lightSebares = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "orange",
    "black",
    "white",
    "gray",
  ];
  let resultLis = "<ul>";

  for (const color of lightSebares) {
    resultLis += `<li style="color: ${color}">${color}</li>`;
  }

  resultLis += "</ul>";
  document.querySelector("#lightSabers").innerHTML = resultLis;

  /*
        homework 07.11
     */
  //Q1
  const btnConect = document.querySelector("#connectRGB");
  btnConect.addEventListener("click", ($event) => {
    const r = document.querySelector("#r").value;
    const g = document.querySelector("#g").value;
    const b = document.querySelector("#b").value;
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.querySelector(
      "#colorDiv"
    ).innerHTML = `<div style="width: 50vw; height: 100px; background-color: ${rgb}"></div>`;

    //Q2
    const textDiv = document.querySelector("#text");
    textDiv.innerHTML = textDiv.innerText
      .split(" ")
      .map((word) =>
        word.lenght > 7
          ? `<span style="background-color: ${rgb}">${word}</span>`
          : word
      )
      .join(" ");
  });

  //Q2
})(window, document);
