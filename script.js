function buttonFunction(buttonElement) {
  const buttonGrandParent = buttonElement.closest(".card")
  const cardBody = buttonGrandParent.querySelector(".card-body")

  cardBody.classList.toggle("show")
  buttonElement.innerHTML === "Expand"
    ? (buttonElement.innerHTML = "Collapse")
    : (buttonElement.innerHTML = "Expand")
}

document.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "expand-button":
      buttonFunction(e.target)
      break

    default:
      break
  }
})
