const postButton = document.getElementById("post");
const container = document.getElementById("container");
postButton.addEventListener("click", post);

function post() {
  const text = prompt("Que voulez-vous poster ?");
  const paragraph = document.createElement("p");
  const textNode = document.createTextNode(text);
  paragraph.appendChild(textNode);
  container.appendChild(paragraph);
}