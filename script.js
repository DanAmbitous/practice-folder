/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

const formElement = document.querySelector("#quiz-form")
let answerInputs = document.querySelectorAll(".answer")
const questionElements = document.querySelectorAll(".question-item")
const alertElement = document.querySelector("#alert")

document.addEventListener("submit", (e) => {
  e.preventDefault()

  //Adds incorrect to all answers' ancestor element for the unanswered questions
  answerInputs.forEach((answerInput) =>
    answerInput.closest(".question-item").classList.add("incorrect")
  )

  //To store all of the answered questions
  let checkedAnswers = []

  //To store to the array of checkedAnswers
  answerInputs.forEach((answerInput) => {
    if (answerInput.checked) {
      checkedAnswers.push(answerInput)
    }
  })

  //To store all of the correct answers selected by the user
  let correctAnswers = []

  //To check to see if the answered questions are correct
  checkedAnswers.forEach((checkedAnswer) => {
    if (checkedAnswer.value === "true") {
      correctAnswers.push(checkedAnswer)

      checkedAnswer.closest(".question-item").classList.remove("incorrect")
      checkedAnswer.closest(".question-item").classList.add("correct")
    }
  })

  //To store all of the corrects answers
  let totalCorrectAnswers = []

  //To check to see if all of the answered questions are correct
  answerInputs.forEach((answerInput) => {
    if (answerInput.value === "true") {
      totalCorrectAnswers.push(answerInput)
    }
  })

  //Checks to see if all of the checked answers are correct to show a Congrats message to the user
  if (correctAnswers.length === totalCorrectAnswers.length) {
    alertElement.classList.add("active")

    setTimeout(() => {
      alertElement.classList.remove("active")
    }, 1000)
  }
})
