// --------------------------------------------------------
console.log("Jeg er i dropDownColor")

const colArray = ["red", "green", "yellow", "blue", "orange"]

const ddColors = document.getElementById("ddColor")
const pbFillDropDown = document.getElementById("pbFillDropdown")
const body = document.querySelector("body");

function fillDropdown(item) {
    const el = document.createElement("option")
    el.textContent = item
    ddColors.appendChild(el)
}

function setBackgroundColor() {
    const selindex = ddColors.selectedIndex
    const selectedColor = ddColors.options[selindex]
    const color = selectedColor.innerText
    body.style.backgroundColor = color
    console.log(selindex)
}

function addColors() {
    console.log("add Colors")
    colArray.forEach(fillDropdown)
    console.log(document.all)
}

pbFillDropDown.addEventListener("click", addColors)
ddColors.addEventListener("change", setBackgroundColor)
