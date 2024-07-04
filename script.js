const todoInput = document.getElementById('toDoInput');
const addToDoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addToDoBtn.addEventListener('click', addToDo);
todoInput.addEventListener('keypress', function(e){
    if (e.key == "Enter"){
        addToDo();
    }
});

function addToDo(){
    const todoText = todoInput.value.trim();
    if(todoText !== '' ){
        if(isDulpicate(todoText)){
            alert(`${todoText} is already in the list`);
            return;
        } 
        else {
        const li = document.createElement('li');
        // li.textContent = todoText;
        const todoSpan = document.createElement('span');
        todoSpan.textContent = todoText;
        li.appendChild(todoSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function(){
            todoList.removeChild(li);
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', function(){
            todoSpan.classList.toggle('completed');
            if(this.textContent == 'Complete'){
                this.textContent = 'Undo';
            }else{
                this.textContent = 'Complete';
            }
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = '';
        }
    }else{
        alert('Please enter a valid To-Do');
        return;
    }
}

function isDulpicate(todoText){
    const items = todoList.getElementsByTagName('li');
    for(let item of items){
        if(item.firstChild && item.firstChild.textContent === todoText){
            return true;
        }
    }
    return false;
}