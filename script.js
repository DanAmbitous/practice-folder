import {
  format,
  getUnixTime,
  fromUnixTime,
  addMonths,
  subMonths,
} from "date-fns"

const calenderButton = document.querySelector(".date-picker-button")
const calenderElement = document.querySelector(".date-picker")
const calenderHeaderText = document.querySelector(".current-month")
const nextCalenderButton = document.querySelector(".next-month-button")
const previousCalenderButton = document.querySelector(".prev-month-button")
let currentDate = new Date()

calenderButton.addEventListener("click", () => {
  calenderElement.classList.toggle("show")
  const selectedDate = fromUnixTime(calenderButton.dataset.selectedData)

  setupDatePicker(selectedDate)
})

function setupDatePicker(date) {
  calenderHeaderText.innerText = format(date, "MMMM - Y")
}

function setDate(date) {
  calenderButton.textContent = format(date, "MMMM do, Y")
  calenderHeaderText.textContent = format(date, "MMMM - Y")
  calenderButton.dataset.selectedData = getUnixTime(date)
}

setDate(new Date())

nextCalenderButton.addEventListener("click", () => {
  currentDate = addMonths(currentDate, 1)
  setupDatePicker(currentDate)
})

previousCalenderButton.addEventListener("click", () => {
  currentDate = subMonths(currentDate, 1)
  setupDatePicker(currentDate)
})
