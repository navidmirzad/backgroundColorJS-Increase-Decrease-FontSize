console.log("jeg er i setbackgrounnd")

const inputColor = document.querySelector(".inputColor");
console.log(inputColor)

const inputColorValue = document.querySelector(".inputColorValue")
console.log(inputColorValue)

const inputColorPicker = document.getElementById("inputColorPicker")
console.log(inputColorPicker)

const pbSetColor = document.querySelector(".pbSetColor");
console.log(pbSetColor)

pbSetColor.textContent = "Tryk mig for at set color";

const body = document.querySelector("body");
console.log(body)

function setBackgroundColor() {
    let color = inputColor.value;
    console.log(color)
    body.style.backgroundColor = color;
    inputColorValue.value = body.style.backgroundColor;
}

function useColorPicker() {
    let color = inputColorPicker.value;
    console.log(color)
    body.style.backgroundColor = color;
    inputColorValue.value = body.style.backgroundColor;
}

pbSetColor.addEventListener("click", setBackgroundColor);

document.addEventListener('keyup', setBackgroundColor);

inputColorPicker.addEventListener("input", useColorPicker);


const pTags = document.getElementsByTagName('p')
console.log(pTags)

let fontSize = 15;

const decreaseFontSize = document.getElementById("decreaseFontSize")
const increaseFontSize = document.getElementById("increaseFontSize")

const pArray = Array.from(pTags)
console.log(pArray)

function increaseFont(element) {
    console.log(element)
    element.style.fontSize = fontSize + "px"
}

function increaseFontSizeAll() {
    fontSize = fontSize + 1
    console.log("fontSize =" + fontSize)
    pArray.forEach(increaseFont)
}

increaseFontSize.addEventListener("click", increaseFontSizeAll)


function decreaseFont(element) {
    console.log(element)
    element.style.fontSize = fontSize + "px"
}

function decreaseFontSizeAll() {
    fontSize = fontSize - 1
    console.log("fontSize =" + fontSize)
    pArray.forEach(decreaseFont)
}

decreaseFontSize.addEventListener("click", decreaseFontSizeAll)