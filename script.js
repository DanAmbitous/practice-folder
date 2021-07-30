import {
  format,
  getUnixTime,
  fromUnixTime,
  addMonths,
  subMonths,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
} from "date-fns"

const calenderTogglerButton = document.querySelector(".date-picker-button")
const calenderElement = document.querySelector(".date-picker")
const calenderDateHeader = document.querySelector(".current-month")
const nextMonthButton = document.querySelector(".next-month-button")
const previousMonthButton = document.querySelector(".prev-month-button")
const dateGrid = document.querySelector(".date-picker-grid-dates")
let currentDate = new Date()

calenderTogglerButton.addEventListener("click", () => {
  calenderElement.classList.toggle("show")
  const selectedDate = fromUnixTime(calenderTogglerButton.dataset.selectedDate)
  //Puts the header date to the selected date, which is the date of the time the user entered the program
  currentDate = selectedDate
  setupDatePicker(selectedDate)
})

function setupDatePicker(selectedDate) {
  calenderDateHeader.textContent = format(currentDate, "MMMM - Y")
  setupDates(selectedDate)
}

function setupDates(selectedDate) {
  const firstDayOfTheWeek = startOfWeek(startOfMonth(selectedDate))
  const lastDayOfTheMonth = endOfWeek(endOfMonth(selectedDate))

  const dates = eachDayOfInterval({
    start: firstDayOfTheWeek,
    end: lastDayOfTheMonth,
  })

  dateGrid.innerHTML = ""

  dates.forEach((date) => {
    const dateElement = document.createElement("button")
    dateElement.classList.add("date")
    dateElement.textContent = date.getDate()
    if (!isSameMonth(date, currentDate)) {
      dateElement.classList.add("date-picker-other-month-date")
    }
    dateGrid.append(dateElement)
  })
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
