interface ToDo {
    id:number;
    text:string;
}

const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const submitButton = document.getElementById("submitButton") as HTMLButtonElement;
const todoList = document.getElementById("todoList") as HTMLUListElement;


let todos:ToDo[] = [];

window.onload = () => {
    const heading = document.getElementById("todayDate");

    if (heading) {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        heading.textContent = `(Date :  ${formattedDate})`;
    }
};


function addTodos():void {
    const newtext = todoInput.value.trim();
    if (newtext!= ""){
        const newTodo:ToDo  = {
            id: Date.now(),
            text: newtext
        };
        todos.push(newTodo);
        renderTodos();
        todoInput.value="";
    }
    
}

function renderTodos(): void{
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

function removeTodo(id: number) : void {
    todos = todos.filter((todo)=> todo.id != id);
    renderTodos();
}

submitButton.addEventListener("click", addTodos)