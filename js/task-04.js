
const buttonDecrement = document.querySelectorAll('[data-action="decrement"]')
const buttonIncrement = document.querySelectorAll('[data-action="increment"]')
const counter = document.querySelector("#value")

let counterValue = 0


function handlerClickDecrement() {
    counterValue -= 1
    counter.innerHTML = counterValue  
}
function handlerClickIncrement() {
    counterValue += 1
    counter.innerHTML = counterValue  
}


buttonDecrement[0].addEventListener("click", handlerClickDecrement)
buttonIncrement[0].addEventListener("click", handlerClickIncrement)
