window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".photogallery img")) {
    i.onclick = () => i.classList.toggle("full");
  }
});
