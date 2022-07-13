const inputEl = document.querySelector("#validation-input")

const inputElValid = parseInt(inputEl.getAttribute("data-length"))


inputEl.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === inputElValid) {
        event.currentTarget.classList.add("valid")
        event.currentTarget.classList.remove("invalid")
    }
    else {
        event.currentTarget.classList.remove("valid")
        event.currentTarget.classList.add("invalid")
    }
})