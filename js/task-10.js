function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberEl = document.querySelector("input")
const newBoxesEl = document.querySelector("#boxes")
const buttonCreateEl = document.querySelector("button[data-create]")
const buttonDestroyEl = document.querySelector("button[data-destroy]")

buttonCreateEl.addEventListener("click", () => createBoxes(inputNumberEl.value))
buttonDestroyEl.addEventListener("click", () => destroyBoxes())

function createBoxes(amount) {
  for (let i = 0; (i <= amount-1); i += 1){
    const newOneBoxesEl = document.createElement("div")
    // newOneBoxesEl.textContent = `${i}`
    newOneBoxesEl.style.width = `${20 + i * 10}px`
    newOneBoxesEl.style.height = `${20 + i * 10}px`
    newOneBoxesEl.style.backgroundColor = getRandomHexColor()
    newBoxesEl.appendChild(newOneBoxesEl)
    console.log(newBoxesEl)
  }

  
}

function destroyBoxes() {
  newBoxesEl.innerHTML = ""
}




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


// function createBoxes(amount) {

//   for (const el of amount) {
    
//     const newOneBoxEl = document.createElement("div")
//     newOneBoxEl.size = 20
//     newOneBoxEl.style.backgroundColor = getRandomHexColor()
  
//     newBoxesEl.push(newOneBoxEl)
//   }

// }

// buttonCreateEl.addEventListener("click", () => createBoxes(inputNumberEl.value))


