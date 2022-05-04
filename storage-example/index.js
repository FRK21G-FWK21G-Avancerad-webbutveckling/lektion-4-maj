/*
1. För varje todo i arrayen så:
    1. Skapa upp en li - tagg
    2. Lägg in todo - texten i vår li-tagg
    3. Lägg till li-taggen i vår ul
*/
const todosElem = document.querySelector('#todos');
const todosFromStorage = localStorage.getItem('myTodos');

function createTodoItem(todo) {
    const todoElem = document.createElement('li');
    todoElem.innerHTML = todo.task;
    todosElem.append(todoElem);

    todoElem.addEventListener('click', () => {
        console.log(todo);
       /*
       1. Ta bort vald todo från arrayen (använd filter() eller en splice())
       2. Spara den nya arrayen till localStorage
       */ 
    });
}


function displayTodos(todos) {
    for(const todo of todos) {
        console.log(todo);
        createTodoItem(todo);
    }
}

function saveToLocalStorage(todos) {
    localStorage.setItem('myTodos', JSON.stringify(todos));
}

async function getTodos() {
    const response = await fetch('http://awesome-todo-api.herokuapp.com/tasks');
    const data = await response.json();

    console.log(data);
    displayTodos(data.todos);
    saveToLocalStorage(data.todos);
}

if (todosFromStorage) {
    displayTodos(JSON.parse(todosFromStorage));
} else {
    getTodos();
}