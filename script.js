import {
  format,
  getUnixTime,
  fromUnixTime,
  addMonths,
  subMonths,
  eachDayOfInterval,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  isSameMonth,
  isSameDay,
} from "date-fns"

const calenderButton = document.querySelector(".date-picker-button")
const calenderElement = document.querySelector(".date-picker")
const calenderHeaderText = document.querySelector(".current-month")
const calenderGrid = document.querySelector(".date-picker-grid-dates")
const nextCalenderButton = document.querySelector(".next-month-button")
const previousCalenderButton = document.querySelector(".prev-month-button")
let currentDate = new Date()

calenderButton.addEventListener("click", () => {
  calenderElement.classList.toggle("show")
  const selectedDate = fromUnixTime(calenderButton.dataset.selectedData)
  currentDate = selectedDate
  setupDatePicker(selectedDate)
})

function setupDatePicker(date) {
  calenderHeaderText.innerText = format(date, "MMMM - Y")
  setupDates(date)
}

function setupDates(selectedDate) {
  const firstDayOfWeek = startOfWeek(startOfMonth(selectedDate))
  const lastDayOfWeek = endOfWeek(endOfMonth(selectedDate))
  const dates = eachDayOfInterval({ start: firstDayOfWeek, end: lastDayOfWeek })

  calenderGrid.innerHTML = ""

  dates.forEach((date) => {
    const dateElement = document.createElement("button")
    dateElement.classList.add("date")
    dateElement.innerHTML = date.getDate()

    if (!isSameMonth(date, selectedDate)) {
      dateElement.classList.add("date-picker-other-month-date")
    }

    if (isSameDay(date, selectedDate)) {
      dateElement.classList.add("selected")
    }

    dateElement.addEventListener("click", () => {
      setDate(date)
      setupDatePicker(date)
    })

    calenderGrid.append(dateElement)
  })
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
