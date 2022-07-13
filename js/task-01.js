
const categoryEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoryEl.length);

[...categoryEl].forEach(function (el, index) {
    const elementsNumber = el.querySelectorAll('li');
    const elementsName = el.querySelector('h2');
    console.log(`Category: ${elementsName.textContent}`);
    console.log(`Elements: ${elementsNumber.length}`);
});