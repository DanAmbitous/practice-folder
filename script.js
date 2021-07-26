//Delete todos

const inputsContainerElement = document.querySelector("#inputs")
const inputTaskElement = document.querySelector("#task-title-input")
const addTaskButton = document.querySelector("#add-task-button")
const listElement = document.querySelector("#tasks")
const taskTemplate = document.querySelector("#task-template")
const LOCAL_STORAGE_PREFIX = "TODO_PROGRAM"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
let todos = loadTodos()
todos.forEach(renderTodo)

listElement.addEventListener("click", (e) => {
  if (!e.target.matches("[data-delete-button]")) return

  const parent = e.target.closest(".task-li")
  const todoId = parent.dataset.todoId

  parent.remove()

  console.log(todos, todoId)

  todos = todos.filter((task) => task.id != todoId)
  console.log(todos)

  saveTodos()
})

listElement.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return

  const parent = e.target.closest(".task-li")
  const todoId = parent.dataset.todoId

  const todo = todos.find((task) => task.id == todoId)
  todo.status = e.target.checked

  saveTodos()
})

function addTask() {
  const todoName = inputTaskElement.value
  if (todoName.replace(/\s/g, "").length === 0) return

  function idCreator(id) {
    id = Math.floor(Math.random() * 10000000)

    todos.forEach((todo) => {
      if (todo.id === id) {
        idChecker(id)
      }

      return id
    })

    return id
  }

  const id = idCreator()

  const todo = {
    name: todoName,
    status: false,
    id: id,
  }

  todos.push(todo)
  renderTodo(todo)
  saveTodos()

  inputTaskElement.value = ""
}

function renderTodo(todo) {
  const templateClone = taskTemplate.content.cloneNode(true)
  const taskLi = templateClone.querySelector(".task-li")
  taskLi.dataset.todoId = todo.id
  const templateSpan = templateClone.querySelector("[data-task-list]")
  templateSpan.innerHTML = todo.name
  const checkBox = templateClone.querySelector("[data-list-item-checkbox]")
  checkBox.checked = todo.status

  listElement.append(templateClone)
}

function saveTodos() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}

function loadTodos() {
  const todoString = localStorage.getItem(TODOS_STORAGE_KEY)

  return JSON.parse(todoString) || []
}

addTaskButton.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "add-task-button":
      addTask()
      break
  }
})
