// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector("todo-list");
const filterOption = document.querySelector("filter-todo");

// Event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event) {}

function deleteCheck(event) {}

function filterTodo(event) {}

function saveLocalTodos(todo) {}

function removeLocalTodos(todo) {}

function getTodos() {}
