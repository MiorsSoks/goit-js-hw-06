const inputRel = document.querySelector("#validation-input")
const length = inputRel.dataset.length / 1
function handleBlur() {
    if (inputRel.value.length === length) {
        return inputRel.classList.toggle('valid')
    }
    else (inputRel.value.length !== length) { inputRel.classList.toggle('invalid') }
}

inputRel.addEventListener('blur', handleBlur)