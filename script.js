// ---------- Date --------------
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const newDate = new Date();
const day = newDate.getDay();
const date = newDate.getDate();
const month = newDate.getMonth();
const year = newDate.getFullYear();

const todaysFullDate = `${weekdays[day]} ${date} ${months[month]}, ${year}`;

function printDate() {
    return `Added ${weekdays[day]} ${date} ${months[month]}, ${year}`;
}



// ---------- Toggle Light/Dark --------------
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const toggleInner = document.querySelector('.toggle-inner');
const root = document.querySelector(':root');

sunIcon.addEventListener('click', toggleDarkMode);
moonIcon.addEventListener('click', toggleLightMode);

function toggleDarkMode() {
    toggleInner.style.transform = 'translateY(-50%)';
    root.style.setProperty('--color-white', '#333333');
    root.style.setProperty('--color-black', '#ffffff');
    root.style.setProperty('--color-dark', '#f1f1f1');
    root.style.setProperty('--color-light', '#444444');
}

function toggleLightMode() {
    toggleInner.style.transform = 'translateY(0)';
    root.style.setProperty('--color-white', '#ffffff');
    root.style.setProperty('--color-black', '#333333');
    root.style.setProperty('--color-dark', '#444444');
    root.style.setProperty('--color-light', '#f1f1f1');
}


// ------- Toggle 'Settings' Modal --------
const body = document.getElementById('body');
const modalBackground = document.getElementById('modalBackground');
const sideMenu = document.getElementById('sideMenu');
const optionsBtn = document.querySelector('.settings');
const closeOptionsBtn = document.querySelector('.close-side-menu');

optionsBtn.addEventListener('click', toggleModal);
modalBackground.addEventListener('click', toggleModal);
closeOptionsBtn.addEventListener('click', toggleModal);

function toggleModal() {
    window.scrollTo(0, 0);
    modalBackground.classList.toggle('modal-shown');
    sideMenu.classList.toggle('modal-shown');
    body.classList.toggle('body-fixed');
}


// ------- Toggle 'Add' Modal for Small Screens --------



// ------- Toggle To-Do Container Order Button --------
const toggleListOrderBtn = document.getElementById('toggleListOrderBtn');
const toDoItemContainer = document.querySelector('.to-do-item-container');

toggleListOrderBtn.addEventListener('click', () => {
    toDoItemContainer.classList.toggle('reverse-order');
});


// ---------- To-Do List --------------
let listName = 'To-Do List';
let userName = 'User';
let listedTodos = 0;
let completedTodos = 0;
let prioritisedTodos = 0;

const listNameText = document.querySelectorAll('#listNameText');
const userNameText = document.querySelectorAll('#userNameText');
const listedTodosText = document.querySelectorAll('#listedTodosText');
const prioritisedText = document.querySelectorAll('#prioritisedText');

function updateUserInfo() {
    listNameText.forEach((list) => {
        list.textContent = listName;
    });

    userNameText.forEach((name) => {
        name.textContent = userName;
    });
}

function updateSummary() {
    listedTodosText.forEach((todos) => {
        const listedTodosInlineText = document.getElementById('listedTodosInlineText');

        if (listedTodos === 1) {
            listedTodosInlineText.textContent = 'is';
            todos.textContent = `${listedTodos} item`;
        } else {
            listedTodosInlineText.textContent = 'are';
            todos.textContent = `${listedTodos} items`;
        }
    });

    prioritisedText.forEach((priority) => {
        if (prioritisedTodos === 1) {
            priority.textContent = `${prioritisedTodos} prioritised item`;
        } else {
            priority.textContent = `${prioritisedTodos} prioritised items`;
        }
    });
}

function checkListedToDos() {
    const itemContainer = document.querySelector('.item-container');
    const emptyItemContainer = document.querySelector('.empty-list-display');

    if (listedTodos !== 0) {
        itemContainer.style.display = 'flex';
        emptyItemContainer.style.display = 'none';
    } else {
        itemContainer.style.display = 'none';
        emptyItemContainer.style.display = 'flex';
    }
}


// ---------- ⭐️ Add a To-Do ⭐️ --------------
const addItemBtn = document.querySelectorAll('#addItemBtn');
const addItemInput = document.querySelectorAll('#addItemInput');
let inputFieldActive = false;

addItemBtn.forEach((addBtn) => {
    addBtn.addEventListener('click', addItemToList);
});

//--Add Item to List on 'Enter'--
document.addEventListener('keydown', function () {
    addItemInput.forEach((input) => {
        if (input === document.activeElement) {
            inputFieldActive = true;
        } else {
            inputFieldActive = false;
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addItemToList();
    }
});
//-----

function addItemToList() {
    addItemInput.forEach((inputValue) => {
        if (inputValue.value !== '') {
            listedTodos++;
            updateSummary();
            addNewItemToList();
            checkListedToDos();
            inputValue.value = '';
        }
    });
}

function addNewItemToList() {
    createNewItemElement();
}

// **Create the To-Do Item
function createNewItemElement() {
    const addItemInput = document.getElementById('addItemInput');
    const dateText = printDate();
    const toDoContainer = document.querySelector('.to-do-item-container');

    const newItemContainer = document.createElement('div');
    newItemContainer.classList.add('to-do-item');
    toDoContainer.appendChild(newItemContainer);

    const newItemContentMain = document.createElement('div');
    newItemContentMain.classList.add('item-content-main');
    newItemContainer.appendChild(newItemContentMain);

    const newToDoItemCheckbox = document.createElement('div');
    newToDoItemCheckbox.classList.add('to-do-item__checkbox');
    newItemContentMain.appendChild(newToDoItemCheckbox);

    const newCircleIcon = document.createElement('i');
    newCircleIcon.classList.add('far', 'fa-circle', 'fa-2x');
    newToDoItemCheckbox.appendChild(newCircleIcon);

    const newToDoItemContent = document.createElement('div');
    newToDoItemContent.classList.add('to-do-item__content');
    newItemContentMain.appendChild(newToDoItemContent);

    const newContentText = document.createElement('div');
    newContentText.classList.add('content-text');
    newToDoItemContent.appendChild(newContentText);

    const newContentTextToDo = document.createElement('p');
    newContentTextToDo.classList.add('content-text__to-do');
    newContentTextToDo.textContent = addItemInput.value;
    newContentText.appendChild(newContentTextToDo);

    const newContentTextDate = document.createElement('p');
    newContentTextDate.classList.add('content-text__date');
    newContentTextDate.textContent = dateText;
    newContentText.appendChild(newContentTextDate);

    const newItemContentIcons = document.createElement('div');
    newItemContentIcons.classList.add('item-content-icons');
    newItemContainer.appendChild(newItemContentIcons);

    const newToDoItemPriority = document.createElement('div');
    newToDoItemPriority.classList.add('to-do-item__priority');
    newItemContentIcons.appendChild(newToDoItemPriority);

    const newStarIcon = document.createElement('i');
    newStarIcon.classList.add('far', 'fa-star');
    newToDoItemPriority.appendChild(newStarIcon);

    const newToDoItemEdit = document.createElement('div');
    newToDoItemEdit.classList.add('to-do-item__edit');
    newItemContentIcons.appendChild(newToDoItemEdit);

    const newEditIcon = document.createElement('i');
    newEditIcon.classList.add('fas', 'fa-edit');
    newToDoItemEdit.appendChild(newEditIcon);

    const newToDoItemRemove = document.createElement('div');
    newToDoItemRemove.classList.add('to-do-item__remove');
    newItemContentIcons.appendChild(newToDoItemRemove);

    const newTrashIcon = document.createElement('i');
    newTrashIcon.classList.add('fas', 'fa-trash-alt');
    newToDoItemRemove.appendChild(newTrashIcon);

}
