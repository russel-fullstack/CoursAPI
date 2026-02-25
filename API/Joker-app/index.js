const header = document.getElementById("header");
const content = document.getElementById("content");
const button = document.getElementById("btn");
function blague() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((response) => response.json())
    .then((infos) => {
      const blague = infos.data.content;
      header.textContent = blague.text_head;
      content.textContent =
        blague.text == "" ? blague.text_hidden : blague.text;
    })
    .catch((error) => console.error("une erreur est survenue:", error));
}

blague();
button.addEventListener("click", blague);
