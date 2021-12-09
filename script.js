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


// Modal
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


// ---------- To-Do List --------------
let listName = 'To-Do List';
let userName = 'Daniel';
let listedTodos = 0;
let completedTodos = 0;
let prioritizedTodos = 0;

const listNameText = document.querySelectorAll('#listNameText');
const userNameText = document.querySelectorAll('#userNameText');

listNameText.forEach((list) => {
    list.textContent = listName;
});

userNameText.forEach((name) => {
    name.textContent = userName;
});
