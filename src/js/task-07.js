const fontSizeControlRef = document.querySelector("#font-size-control")
const resultFontSizeControlRef = document.querySelector('#text')
function changefontSize() {
    resultFontSizeControlRef.style.fontSize = fontSizeControlRef.value + 'px';   
}

fontSizeControlRef.addEventListener('input', changefontSize)
 