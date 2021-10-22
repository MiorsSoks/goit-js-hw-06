
const nameColorRef = document.querySelector('.color')
const buttonRef = document.querySelector('.change-color')
const bodyColorRef = document.querySelector('body')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function hundleChangeColor() {
  bodyColorRef.style.backgroundColor = getRandomHexColor()
  nameColorRef.textContent = getRandomHexColor()
}

buttonRef.addEventListener("click", hundleChangeColor)
