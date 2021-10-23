const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayElements = []

const makeIngredients = (elements) => {
  return elements.map(element => {
    const elements = document.createElement("li")
    elements.textContent = element
    elements.classList.add("item")
    console.log(element)
    arrayElements.push(elements)
    return elements
  });
}

makeIngredients(ingredients)

const listRef = document.querySelector('#ingredients')
listRef.append(...arrayElements)