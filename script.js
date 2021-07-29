;({
  plugins: ["jsdom-quokka-plugin"],
})

import {
  format,
  getUnixTime,
  fromUnixTime,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns"

const calenderButtonToggler = document.querySelector(".date-picker-button")
const calenderElement = document.querySelector(".date-picker")
const calenderHeader = document.querySelector(".current-month")
const previousCalenderButton = document.querySelector(".prev-month-button")
const nextCalenderButton = document.querySelector(".next-month-button")
const dateGrid = document.querySelector(".date-picker-grid-dates")
let currentDate = new Date()

calenderButtonToggler.addEventListener("click", () => {
  calenderElement.classList.toggle("show")
  const selectedDate = fromUnixTime(calenderButtonToggler.dataset.selectedDate)
  currentDate = selectedDate
  setupDatePicker(selectedDate)
})

function setupDatePicker(selectedDate) {
  calenderHeader.innerText = format(currentDate, "MMMM - Y")

  setupDates(selectedDate)
}

function setupDates(selectedDate) {
  const firstWeekStart = startOfWeek(startOfMonth(currentDate))
  const lastWeekEnd = endOfWeek(endOfMonth(currentDate))
  const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd })
  dateGrid.innerHTML = ""

  dates.forEach((date) => {
    const dateElement = document.createElement("button")
    dateElement.classList.add("date")
    dateElement.innerHTML = date.getDate()
    if (!isSameMonth(date, currentDate)) {
      dateElement.classList.add("date-picker-other-month-date")
    }
    if (isSameDay(date, selectedDate)) {
      dateElement.classList.add("selected")
    }

    dateElement.addEventListener("click", () => {
      setDate(date)
      setupDatePicker(selectedDate)
    })

    dateGrid.appendChild(dateElement)
  })
}

nextCalenderButton.addEventListener("click", () => {
  currentDate = addMonths(currentDate, 1)
  const selectedDate = fromUnixTime(calenderButtonToggler.dataset.selectedDate)

  setupDatePicker(selectedDate)
})

previousCalenderButton.addEventListener("click", () => {
  currentDate = subMonths(currentDate, 1)
  const selectedDate = fromUnixTime(calenderButtonToggler.dataset.selectedDate)

  setupDatePicker(selectedDate)
})

function setDate(date) {
  calenderButtonToggler.innerText = format(date, "MMMM do, Y")
  calenderButtonToggler.dataset.selectedDate = getUnixTime(date)
}

setDate(new Date())
