// ---------- Date --------------
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const newDate = new Date();
const day = newDate.getDay();
const date = newDate.getDate();
const month = newDate.getMonth();
const year = newDate.getFullYear();

const todaysFullDate = `${weekdays[day]} ${date} ${months[month]}, ${year}`;


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




// ---------- To-Do List --------------
let listName = 'To-Do List';
let userName = 'Daniel';
let listedTodos = 1;
let completedTodos = 0;
let prioritisedTodos = 0;

const listNameText = document.querySelectorAll('#listNameText');
const userNameText = document.querySelectorAll('#userNameText');
const listedTodosText = document.querySelectorAll('#listedTodosText');
const prioritisedText = document.querySelectorAll('#prioritisedText');

listNameText.forEach((list) => {
    list.textContent = listName;
});

userNameText.forEach((name) => {
    name.textContent = userName;
});

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
