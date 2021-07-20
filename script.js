const openModalButton = document.querySelector("#open-modal-button")
const closeModal = document.querySelector("#close-modal-button")
const modal = document.querySelector("#modal")
const overlay = document.querySelector("#overlay")

openModalButton.addEventListener("click", (e) => {
  modal.classList.add("open")
  overlay.classList.add("open")
})

closeModal.addEventListener("click", (e) => {
  modal.classList.remove("open")
  overlay.classList.remove("open")
})

overlay.addEventListener("click", (e) => {
  modal.classList.remove("open")
  overlay.classList.remove("open")
})
