const inputNameEl = document.querySelector("#name-input")
const outputNameEl = document.querySelector("#name-output")

inputNameEl.addEventListener("input", (event) => {
    outputNameEl.textContent = event.currentTarget.value.trim();
    if (!outputNameEl.textContent){
    outputNameEl.textContent = "Anonymous"
    }
}    
)

// inputNameEl.addEventListener("input", (event) => {
//     outputNameEl.textContent = event.currentTarget.value.trim() || "Anonymus"
// })