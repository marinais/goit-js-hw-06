const formEl = document.querySelector(".login-form")



formEl.addEventListener("submit", handleSubmit)


function handleSubmit(event) {
  event.preventDefault();
  
  // const {
  //   elements: { email, password }
  // } = event.currentTarget;

  const  { email, password }
    = event.currentTarget.elements;
  
  const valueEl = {
    email: email.value,
    password: password.value,
  }

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(valueEl);
  event.currentTarget.reset();
}