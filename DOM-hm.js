(() => {
  //Q1
  const inputText = document.querySelector("#inputText");
  const outputText = document.querySelector("#outputText");
  inputText.addEventListener("keypress", ($event) => {
    outputText.value = $event.target.value;
  });

  //Q2
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "orange",
    "black",
    "white",
  ];
  const backgroundBtn = document.querySelector("#changeBackground");
  backgroundBtn.addEventListener("click", ($event) => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 9)];
  });

  //Q4
  const countBtn = document.querySelector("#counter");
  var clicks = 1;
  countBtn.addEventListener("click", ($event) => {
    clicks += 1;
    countBtn.innerHTML = clicks;
  });
})();
