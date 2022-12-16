const button = document.getElementById("show");
button.addEventListener("click", changeVisibility);

function changeVisibility() {
  const para = document.getElementById("dynamic");
  if (para.className.includes("hide-p")) {
    const classes = para.classList;
    const result = classes.replace("hide-p", "show-p");
    console.log(result);
  } else {
    const classes = para.classList;
    const result = classes.replace("show-p", "hide-p");
    console.log(result);
  }
}