// --------------------------------------------------------
console.log("Jeg er i dropDownColor2")

const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]]
const colorObjects = [ {"name": "red", "id": "#ff0000"}, {"name": "green", "id": "#00ff00"},
    {"name": "yellow", "id": "#ffff00"}, {"name": "navy blue", "id": "#1f35a9"}]

const ddColors2 = document.getElementById("ddColor2")
const pbFillDropDown2 = document.getElementById("pbFillDropdown2")

function fillDropdown2(item) {
    const el = document.createElement("option")
    el.textContent = item[0]
    el.value = item[1]
    ddColors2.appendChild(el)
}

function fillDropdownObj(item) {
    const el = document.createElement("option")
    el.textContent = item.name
    el.value = item.id
    ddColors2.appendChild(el)
}

function setBackgroundColor2() {
    const selindex = ddColors2.selectedIndex
    const selectedOption = ddColors2.options[selindex]
    const color = selectedOption.value
    body.style.backgroundColor = color
    console.log(selindex)
}

function addColors2() {
    console.log("add Colors")
    //colorObjects.forEach(fillDropdown2)
    colorObjects.forEach(fillDropdownObj)
    console.log(document.all)
}

pbFillDropDown2.addEventListener("click", addColors2)
ddColors2.addEventListener("change", setBackgroundColor2)
