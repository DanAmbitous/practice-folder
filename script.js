import {
  format,
  getUnixTime,
  fromUnixTime,
  addMonths,
  subMonths,
} from "date-fns"

const calenderTogglerButton = document.querySelector(".date-picker-button")
const calenderElement = document.querySelector(".date-picker")
const calenderDateHeader = document.querySelector(".current-month")
const nextMonthButton = document.querySelector(".next-month-button")
const previousMonthButton = document.querySelector(".prev-month-button")
let currentDate = new Date()

calenderTogglerButton.addEventListener("click", () => {
  calenderElement.classList.toggle("show")
  const selectedDate = fromUnixTime(calenderTogglerButton.dataset.selectedDate)
  //Puts the header date to the selected date, which is the date of the time the user entered the program
  currentDate = selectedDate
  setupDatePicker(selectedDate)
})

function setupDatePicker() {
  calenderDateHeader.textContent = format(currentDate, "MMMM - Y")
}

nextMonthButton.addEventListener("click", () => {
  currentDate = addMonths(currentDate, 1)
  setupDatePicker()
})

previousMonthButton.addEventListener("click", () => {
  currentDate = subMonths(currentDate, 1)
  setupDatePicker()
})

function dateAssigner(currentDate) {
  calenderTogglerButton.textContent = format(currentDate, "MMMM do, Y")

  calenderTogglerButton.dataset.selectedDate = getUnixTime(currentDate)
}

dateAssigner(currentDate)
