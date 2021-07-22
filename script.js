// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages

const formElement = document.querySelector("#form")
const errorList = document.querySelector(".errors-list")
const inputElements = document.querySelectorAll(".form-group")
const usernameInput = inputElements[0].children[1]
const passwordInput = inputElements[1].children[1]
const passwordConfirmationInput = inputElements[2].children[1]
const termsAgreement = inputElements[3]

document.addEventListener("submit", (e) => {
  const errorMessages = []

  if (usernameInput.value.length < 6) {
    e.preventDefault()

    errorMessages.push("Your username has to be at least 6 characters long")
  }

  if (passwordInput.value.length < 10) {
    e.preventDefault()

    errorMessages.push("Your password has to be at least 10 characters long")
  }

  if (passwordConfirmationInput !== passwordInput) {
    e.preventDefault()

    errorMessages.push(
      "Your password confirmation has to be same as the password"
    )
  }

  if (!termsAgreement.checked) {
    e.preventDefault()

    errorMessages.push("You need to accept the Terms and Conditions")
  }

  console.log(errorMessages)
})

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
}
