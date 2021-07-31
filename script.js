import {
  format,
  getUnixTime,
  fromUnixTime,
  addMonths,
  subMonths,
} from "date-fns"

const calenderTogglerButton = document.querySelector(".date-picker-button")
const calenderElement = document.querySelector(".date-picker")
const calenderTextHeader = document.querySelector(".current-month")
const nextMonthButton = document.querySelector(".next-month-button")
const previousMonthButton = document.querySelector(".prev-month-button")
let currentDate = new Date()

function setDates(date) {
  calenderTogglerButton.textContent = format(date, "MMMM do, Y")
  calenderTextHeader.textContent = format(date, "MMMM - Y")
}

calenderTogglerButton.addEventListener("click", () => {
  calenderElement.classList.toggle("show")
})

nextMonthButton.addEventListener("click", () => {
  currentDate = addMonths(currentDate, 1)

  calenderTextHeader.textContent = format(currentDate, "MMMM - Y")
})

previousMonthButton.addEventListener("click", () => {
  currentDate = subMonths(currentDate, 1)

  calenderTextHeader.textContent = format(currentDate, "MMMM - Y")
})

setDates(currentDate)

// function dateAssigner() {
//   calenderTogglerButton.textContent = format(currentDate, "MMMM do, Y")

//   calenderTogglerButton.dataset.selectedDate = getUnixTime(currentDate)

//   const selectedDate = fromUnixTime(calenderTogglerButton.dataset.selectedDate)

//   setupDatePicker(selectedDate)
// }

// function setDate(date) {
//   calenderTogglerButton.textContent = format(date, "MMMM do, Y")
//   calenderTextHeader.textContent = format(currentDate, "MMMM - Y")

//   const selectedDate = fromUnixTime(calenderTogglerButton.dataset.selectedDate)

//   setupDatePicker(selectedDate)
// }

// setDate(currentDate)

// function setupDatePicker(selectedDate) {
//   console.log(selectedDate)
// }
