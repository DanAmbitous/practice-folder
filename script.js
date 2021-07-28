;({
  plugins: ["jsdom-quokka-plugin"],
})

import { format, getUnixTime, fromUnixTime } from "date-fns"

const calenderButtonToggler = document.querySelector(".date-picker-button")
const calenderElement = document.querySelector(".date-picker")
const calenderHeaderElement = document.querySelector(".current-month")

function calenderToggler() {
  calenderElement.classList.toggle("show")
  const currentDate = fromUnixTime(calenderButtonToggler.dataset.selectedDate)
  setupDatePicker(currentDate)
}

function currentDateAssigner(date) {
  calenderButtonToggler.innerHTML = format(date, "MMMM do, y")
  calenderButtonToggler.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker(selectedDate) {
  calenderHeaderElement.innerHTML = format(selectedDate, "MMMM - Y")
}

calenderButtonToggler.addEventListener("click", () => {
  calenderToggler()
})

currentDateAssigner(new Date())
