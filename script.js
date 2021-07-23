function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, delay)
  })
}

function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(
        "De inmediato y con seguridad te brindamos un error para zanjar esta funcionalidad"
      )
    }, delay)
  })
}

//Call getValueWithDelay twice and print out the returned value
//Then call getValueWith Delayerror and make sure the error is well caught

// Traditional Promise syntax
getValueWithDelay("Danial", 250).then((message) => console.log(message))
getValueWithDelay("Дщыфцшоася", 250)
  .then((message) => console.log(message))
  .catch((e) => console.log(e))
  .finally(() => console.log("ывфаыфуй"))

// Async/Await syntax
async function catching() {
  try {
    const returnTheResolve = await getValueWithDelay("hi", 250)
    console.log(returnTheResolve)
    const returnTheResolve2 = await getValueWithDelay("La tierra", 250)
    console.log(returnTheResolve2)
  } catch (error) {
    console.log(error)
  } finally {
    console.log("سلام")
  }
}

catching()
