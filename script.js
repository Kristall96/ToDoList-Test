let profile = document.getElementById('profile');
let content = document.getElementById('content');
let name = document.getElementById('name');
let email = document.getElementById('email');
let search = document.getElementById('search');
let myday = document.getElementById('myday');
let important = document.getElementById('important');
let planned = document.getElementById('planned');
let assigned = document.getElementById('assigned');
let flagged = document.getElementById('flagged');
let tasks = document.getElementById('tasks');
let gettingstarted = document.getElementById('gettingstarted');
let groceries = document.getElementById('groceries');
let ulList = document.getElementById('ul-list');
let imgNote = document.getElementById('img-note');
let active = document.getElementsByClassName('active');
let btn = document.getElementById('btn');
let taskInput = document.getElementById('task-input');
let tasksInput = document.getElementById('tasks-input');
let tasksInputData = document.getElementById('tasks-input-data');
let tasksInputRemainder = document.getElementById('tasks-input-remainder');
let tasksInputRepeat = document.getElementById('tasks-input-repeat');

function addTask() {
    for (let i = 0; i < active.length; i++) {
        active[i].style.removeProperty('display');
    }

    let taskText = taskInput.value;

    if (taskText.trim() !== '') {
        let listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a button
        let deleteButton = document.createElement('button');
        deleteButton.style.float ='right';
        deleteButton.textContent = 'Done';
        deleteButton.onclick = function() {
            // Remove the corresponding li when the button is clicked
            listItem.classList.toggle('deleteButton');
        };

        // Append the button and the list item to the ulList
        listItem.appendChild(deleteButton);
        ulList.appendChild(listItem);

        taskInput.value = '';
    }
}

let elementHidden = false;
function hiddenEl(){
    if(!elementHidden) {
        let element = document.getElementsByClassName('active');
        for (let i= 0; i<element.length; i++){
            element[i].style.display = 'none';
        }
    }
}

let dragable = ['Item 1', 'Item 2', 'Item 3'];

function createDraggableList(){
    const ulList = document.getElementsByClassName('li');
    li.forEach((itemText) => {
        const li = document.createElement('li');
        li.textContent = itemText;
        li.addEventListener('dragstart', drag);
        ulList.appendChild(li);
    });
}

function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.content);
}

function drop(event){
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.querySelector('.dragging');
    const dropTarget = event.target;

    if (dropTarget.tagName === 'LI'){
        dropTarget.parentNode.insertBefore(draggedElement, dropTarget.nextSibling);
    }
    draggedElement.classList.remove('dragging');
}

createDraggableList();





