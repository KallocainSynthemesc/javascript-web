const postButton = document.getElementById("post");
postButton.addEventListener("click", post);

function post() {
  const lait = document.getElementById("lait");
  const newLait = lait.cloneNode(true);
  const vendredi = document.getElementById("vendredi");
  console.log(vendredi.lastElementChild); 
  vendredi.lastElementChild.insertAdjacentElement("afterend", newLait);
  //mettre la logique de clonage ici
}
