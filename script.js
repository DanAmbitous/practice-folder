import { format } from "date-fns"

const dateButtonElement = document.querySelector(".date-picker-button")
const calenderElement = document.querySelector(".date-picker")

function calenderToggler() {
  calenderElement.classList.toggle("show")
}

function setDate(date) {
  dateButtonElement.innerHTML = format(date, "MMMM")
}

document.addEventListener("click", (e) => {
  const element = e.target.classList

  switch (true) {
    case element.contains("date-picker-button"):
      calenderToggler()
      setDate(new Date())
      break
  }
})

document.addEventListener("input", (e) => {
  console.log(e)
})
