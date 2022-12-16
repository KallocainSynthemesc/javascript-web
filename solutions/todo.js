const button = document.getElementById("button");
button.addEventListener("click", addTodo);

function addTodo() {
  const todoinput = document.getElementById("todoinput");
  const value = todoinput.value;
  const li = document.createElement("li");
  li.textContent = value;
  const todolist = document.getElementById("todo");
  todolist.appendChild(li);
}