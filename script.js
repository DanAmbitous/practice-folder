const calenderTogglerButton = document.querySelector(".date-picker-button")
const calenderElement = document.querySelector(".date-picker")

calenderElement.addEventListener("click", () => {
  calenderElement.classList.toggle("show")
})
