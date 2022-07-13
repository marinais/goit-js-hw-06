function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberEl = document.querySelector("input")
const newBoxesEl = document.querySelector("#boxes")
const buttonCreateEl = document.querySelector("button")

// function createBoxes(amount) {
//   // // amount = inputNumberEl.currentTarget.value
//   // const newOneBoxesEl = document.createElement("div")
//   // // newOneBoxesEl.size = `${newOneBoxesEl.size.value}px`
//   // for (newOneBoxesEl of amount) {
//   //   const newOneBoxesEl = document.createElement("div")
//   //   newOneBoxesEl.style.backgroundColor = getRandomHexColor()
//   //   newOneBoxesEl.size += 10
//   //  newBoxesEl.push(newOneBoxesEl)
//   // }
// 
// }


function createBoxes(amount) {

  for (const el of amount) {
    
    const newOneBoxEl = document.createElement("div")
    newOneBoxEl.size = 20
    newOneBoxEl.style.backgroundColor = getRandomHexColor()
  
    newBoxesEl.push(newOneBoxEl)
  }

}


buttonCreateEl.addEventListener("click", () => createBoxes(inputNumberEl.value))


