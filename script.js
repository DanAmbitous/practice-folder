const grandparent = document.querySelector("#grand-parent")
const parentOne = grandparent.children[1]

parentOne.style.color = "blue"
parentOne.nextElementSibling.style.color = "red"

const parentTwo = grandparent.children[2]

console.log(parentOne, parentTwo)

const childOfParentOne = parentOne.children[1]

childOfParentOne.closest("#grand-parent").style.color = "green"
