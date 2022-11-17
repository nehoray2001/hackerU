(function (window, document) {
  // todo application

  const todo = document.querySelector("#todo");
  const todoInput = document.querySelector("#todoInput");
  const ToDobtn = document.querySelector("#ToDobtn");
  const list = document.createElement("ul");

  const handleClickRemove = ($event) => {
    $event.target.parentElement.parentElement.remove();
  };

  ToDobtn.addEventListener("click", ($event) => {
    console.log(todoInput.value);
    if (todoInput.value != "") {
      const task = document.createElement("li");
      const span = document.createElement("span");

      const btnUNDO = document.createElement("button");
      btnUNDO.append("UNDO");
      btnUNDO.hidden = "hidden";

      const button = document.createElement("button");
      button.append("❌");

      button.addEventListener("click", handleClickRemove);
      span.addEventListener("click", ($event) => {
        span.style.color = "red";
        button.setAttribute("hidden", "hidden");
        btnUNDO.removeAttribute("hidden");
      });

      btnUNDO.addEventListener("click", ($event) => {
        btnUNDO.setAttribute("hidden", "hidden");
        button.removeAttribute("hidden");
        span.style.color = "black";
      });

      span.append(todoInput.value);
      span.appendChild(button);
      span.appendChild(btnUNDO);
      todoInput.value = "";

      task.appendChild(span);
      list.appendChild(task);
    }
  });
  todo.appendChild(list);
})(window, document);
