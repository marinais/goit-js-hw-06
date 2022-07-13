const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsListEl = document.querySelector("#ingredients")
const makeIngredientsList = options => {
  return options.map(option => {
    const ingredientsItemEl = document.createElement("li")
    ingredientsItemEl.textContent = option
    ingredientsItemEl.classList.add("item")

    return ingredientsItemEl
  })
}


const addedIngredients = makeIngredientsList(ingredients)
ingridientsListEl.append(...addedIngredients)
console.log(ingridientsListEl)



// for (let i = 0; i < ingredients.length; i += 1) {

//   const ingredientsItemEl = document.createElement("li")
//   ingredientsItemEl.textContent = ingredients[i]
//   ingredientsItemEl.classList.add("item")
//   newIngredients.push(ingredientsItemEl)
//   // console.log(ingredientsItemEl);
// }

// console.log(newIngredients)
// ingridientsListEl.append(...newIngredients)