let counterValue = 0;

const buttonDecr = document.querySelector('[data-action="decrement"]')
const buttonIncr = document.querySelector('[data-action="increment"]')
const value = document.querySelector("#value")


function increment() {
     counterValue += 1;
    return value.textContent = counterValue
}
function decrement() {
     counterValue -= 1;
    return value.textContent = counterValue
}

buttonDecr.addEventListener('click', decrement)
buttonIncr.addEventListener('click', increment)

