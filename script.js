//*User interactable
//add todos
//user will type in todo
//delete todos
//able to mark todos complete or incomplete

//saving todos
//loading todos

const todosListElement = document.querySelector("#list")
const formElement = document.querySelector("#new-todo-form")
const addItemButtonElement = document.querySelector("#add-button-element")
const inputTodosElement = document.querySelector("#todo-input")
const template = document.querySelector("#list-item-template")
const LOCAL_STORAGE_PREFIX = "TODO_LIST"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
let todos = loadTodos()
todos.forEach(renderTodo)

list.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return

  const todoId = e.target.closest("li").dataset.todoId

  const todo = todos.find((todo) => todo.id === todoId)
  todo.complete = e.target.checked

  saveTodos()
})

list.addEventListener("click", (e) => {
  if (!e.target.matches("[data-button-delete]")) return

  const parent = e.target.closest("li")
  const todoId = e.target.closest("li").dataset.todoId

  parent.remove()

  todos = todos.filter((todo) => todo.id !== todoId)
  saveTodos()

  //remove the todo from screen
  //remove the todo from the list
  //save the update to date todos
})

function addTask() {
  const todoName = inputTodosElement.value

  const newTodo = {
    name: todoName,
    complete: false,
    id: new Date().valueOf().toString(),
  }

  todos.push(newTodo)
  renderTodo(newTodo)
  saveTodos()

  inputTodosElement.value = ""
}

function renderTodo(todo) {
  const todoName = todo.name

  if (todoName.replace(/\s/g, "").length === 0) return

  const templateClone = template.content.cloneNode(true)
  const listItem = templateClone.querySelector(".list-item")
  listItem.dataset.todoId = todo.id
  const textElement = templateClone.querySelector("[data-list-item-text]")
  textElement.innerHTML = todoName
  const checkbox = templateClone.querySelector("[data-list-item-checkbox]")
  checkbox.checked = todo.complete

  list.appendChild(templateClone)
}

function saveTodos() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}

function loadTodos() {
  const todosString = localStorage.getItem(TODOS_STORAGE_KEY)

  return JSON.parse(todosString) || []
}

document.addEventListener("submit", (e) => {
  e.preventDefault()

  addTask()
})
