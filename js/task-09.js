function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBodyEl = document.querySelector("body")
const colorEl = document.querySelector(".color")


colorBodyEl.addEventListener("click", (event) => {
  colorBodyEl.style.backgroundColor = getRandomHexColor()
  colorEl.textContent = getRandomHexColor()
})