(function (window, document) {
  const handler = ($event) => {
    alert("Oops!");
    $event.stopPropagation();
  };

  const btnAlert = document.querySelector("#btnAlert");
  const divAlert = document.querySelector("#divAlert");
  const btnP = document.querySelector("#btnP");

  btnAlert.addEventListener("click", ($event) => {
    alert("Oops!");
    $event.stopPropagation();
  });

  btnAlert.addEventListener("click", handler);

  divAlert.addEventListener("click", handler);
  btnP.addEventListener("click", handler);

  const carSelect = document.querySelector("#cars");
  carSelect.addEventListener("input", ($event) => {
    console.log(carSelect.value);
  });
})(window, document);
