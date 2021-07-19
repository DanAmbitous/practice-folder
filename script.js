const list = document.querySelector("#list")
const additionInput = document.querySelector("#add-item")
const additionButton = document.querySelector("#add-item-button")

function additionFunctionality() {
  const item = additionInput.value

  const listElement = document.createElement("li")
  listElement.textContent = item
  list.append(listElement)

  additionInput.value = ""
  additionInput.focus()
}

additionButton.addEventListener("click", additionFunctionality)
