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
// getValueWithDelay("Danial", 250).then((message) => console.log(message))
// getValueWithDelay("Дщыфцшоася", 250)
//   .then((message) => console.log(message))
//   .catch((e) => console.log(e))
//   .finally(() => console.log("ывфаыфуй"))

// // Async/Await syntax
// async function catching() {
//   try {
//     const returnTheResolve = await getValueWithDelay("hi", 250)
//     console.log(returnTheResolve)
//     const returnTheResolve2 = await getValueWithDelay("La tierra", 250)
//     console.log(returnTheResolve2)
//   } catch (error) {
//     console.log(error)
//   } finally {
//     console.log("سلام")
//   }
// }

// catching()

async function loopiation() {
  for (let i = 0; i <= 10; i++) {
    try {
      const laRespuesta = await getValueWithDelay(
        "No es sabio alabar el día",
        100
      )
      console.log(laRespuesta)
      const laRespuesta2 = await getValueWithDelay(
        "No es sabio alabar el día",
        100
      )
      console.log(laRespuesta2)
      const laRespuesta3 = await getValueWithDelay(
        "No es sabio alabar el día",
        100
      )
      console.log(laRespuesta3)
      const laRespuesta4 = await getValueWithDelayError(
        "No es sabio alabar el día",
        100
      )
      console.log(laRespuesta4)
    } catch (error) {
      console.log(error)
    } finally {
      console.log(
        "Por fin mi compañeros, hemos llegado antes de la puesta del sol"
      )
    }
  }
}

loopiation()

// for (let i = 0; i <= 10; i++) {
//   getValueWithDelay("Abrelo", 100).then((message) => {
//     console.log(message)
//   })
// }
