const btn = document.querySelector('button');
const input = document.querySelector('input');
const todoList = document.querySelector('.todo-list');
const write = document.querySelector('.write');
const limit = document.querySelector('.limit');

let elements = [];

btn.addEventListener('click', addTodo);
input.addEventListener('keydown', (e)=> {
    if(e.key == 'Enter') {
        addTodo();
    }
});

function addTodo() {
    if(input.value) {
        // Create todo
        let newTodo = document.createElement('div');
        newTodo.classList.add('todo');
        newTodo.style.paddingLeft = '14px';
        newTodo.style.paddingRight = '14px';

        // Add input text
        let text = document.createElement('p');
        text.innerText = input.value;
        newTodo.appendChild(text);

        // Add icons container 
        let icons = document.createElement('div');
        icons.classList.add('icons');
        newTodo.appendChild(icons);

        // Create and add icons 
        let complete = document.createElement('i');
        complete.classList.add('fa-regular' ,'fa-circle-check', 'complete-icon');
        complete.addEventListener('click', completeTodo);

        let remove = document.createElement('i');
        remove.classList.add('fa-regular', 'fa-trash-can', 'icono-delete');
        remove.addEventListener('click', removeTodo);
        
        icons.append(complete, remove);
        input.focus();
        

        // Add to list
        elements.push(newTodo);
        if(elements.length <= 11) {
            todoList.appendChild(newTodo);
            input.value = '';
        } else {
            limit.style.display = 'block';
            input.value = '';
            setTimeout(() => {
                limit.style.display = 'none';
            }, 9000);
        }

    } else {
        write.style.display = 'block';
        setTimeout(() => {
            write.style.display = 'none';
            input.focus();
        }, 2300);
        
    }
}

function  completeTodo(e) {
    let task = e.target.parentNode.parentNode;
    task.classList.toggle('completed');
}

function removeTodo(e) {
   let task = e.target.parentNode.parentNode;
   elements.pop();
   task.remove();
   input.focus();
}