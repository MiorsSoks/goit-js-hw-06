const inputRef = document.querySelector('#name-input')
const outputRef = document.querySelector('#name-output')

function greetings () {
    if (inputRef.value === "") {    
        return outputRef.textContent = 'Anonymous';
    }
    return outputRef.textContent = inputRef.value;
};

inputRef.addEventListener('input', greetings)


