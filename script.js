"use strict";
const todoInput = document.getElementById("todoInput");
const submitButton = document.getElementById("submitButton");
const todoList = document.getElementById("todoList");
let todos = [];
window.onload = () => {
    const heading = document.getElementById("todayDate");
    if (heading) {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        heading.textContent = `(Date :  ${formattedDate})`;
    }
};
function addTodos() {
    const newtext = todoInput.value.trim();
    if (newtext != "") {
        const newTodo = {
            id: Date.now(),
            text: newtext
        };
        todos.push(newTodo);
        renderTodos();
        todoInput.value = "";
    }
}
function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.classList.add('remove');
        removeButton.onclick = () => removeTodo(todo.id);
        li.appendChild(removeButton);
        todoList.appendChild(li);
    });
}
function removeTodo(id) {
    todos = todos.filter((todo) => todo.id != id);
    renderTodos();
}
submitButton.addEventListener("click", addTodos);
