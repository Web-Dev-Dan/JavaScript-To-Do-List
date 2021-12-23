'use strict'

// ---------- 🔆 Toggle Light/Dark Mode 🌙 --------------
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const toggleInnerBox = document.querySelector('.options--toggle-inner');
const root = document.querySelector(':root');

function toggleDarkMode() {
    toggleInnerBox.style.transform = 'translateY(0)';
    root.style.setProperty('--color-white', '#ffffff');
    root.style.setProperty('--color-black', '#333333');
    root.style.setProperty('--color-dark', '#444444');
    root.style.setProperty('--color-light', '#f1f1f1');
}

function toggleLightMode() {
    toggleInnerBox.style.transform = 'translateY(-100%)';
    root.style.setProperty('--color-white', '#333333');
    root.style.setProperty('--color-black', '#ffffff');
    root.style.setProperty('--color-dark', '#f1f1f1');
    root.style.setProperty('--color-light', '#444444');
}

sunIcon.addEventListener('click', toggleDarkMode);
moonIcon.addEventListener('click', toggleLightMode);


// ---------- 📅 Date 📅 --------------
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const newDate = new Date();
const day = newDate.getDay();
const date = newDate.getDate();
const month = newDate.getMonth();
const year = newDate.getFullYear();

const todaysFullDate = `${weekdays[day]} ${date} ${months[month]}, ${year}`;

function printDate() {
    return `Added ${todaysFullDate}`;
}


// ---------- 📄 Toggle Modals 📄 --------------
const settingsBtn = document.getElementById('settingsBtn');
const modalBackground = document.querySelector('.modal-background');
const settingsModal = document.querySelector('.settings-modal');
const closeSettingsBtn = document.querySelector('.close-settings-modal');

function openModalBackground() {
    modalBackground.style.display = 'flex';
}

function closeModal() {
    modalBackground.style.display = 'none';
    settingsModal.style.display = 'none';
    settingsModal.classList.remove('settings-modal-active');
}

function openSettings() {
    openModalBackground();
    settingsModal.style.display = 'flex';
    settingsModal.classList.add('settings-modal-active');
}

settingsBtn.addEventListener('click', openSettings);
modalBackground.addEventListener('click', closeModal);
closeSettingsBtn.addEventListener('click', closeModal);


// ---------- 🟢🔵🟣🟠 Change Colour 🟢🔵🟣🟠 --------------
const colourBtn = document.querySelectorAll('.colour-box');

colourBtn.forEach((colour) => {
    colour.addEventListener('click', () => {
        colourBtn.forEach((colour) => {
            colour.classList.remove('colour-active');
        });

        if (colour.classList.contains('colour-green')) {
            colour.classList.add('colour-active');
            root.style.setProperty('--color-primary', 'rgb(68, 218, 128)');
        } else if (colour.classList.contains('colour-orange')) {
            root.style.setProperty('--color-primary', 'rgb(255, 165, 0)');
            colour.classList.add('colour-active');
        } else if (colour.classList.contains('colour-blue')) {
            root.style.setProperty('--color-primary', 'rgb(80, 170, 218)');
            colour.classList.add('colour-active');
        } else if (colour.classList.contains('colour-pink')) {
            root.style.setProperty('--color-primary', 'rgb(247, 167, 180)');
            colour.classList.add('colour-active');
        } else if (colour.classList.contains('colour-purple')) {
            root.style.setProperty('--color-primary', 'rgb(112, 112, 216)');
            colour.classList.add('colour-active');
        }
    });
});


// ---------- 📊 List Details 📊 --------------
let listName = 'To-Do List';
let username = 'User';
let listedTodos = 0;

const usernameText = document.querySelectorAll('.username');
const listNameText = document.querySelectorAll('.listName');

usernameText.forEach((name) => {
    name.textContent = username;
});

listNameText.forEach((name) => {
    name.textContent = listName;
});


// ---------- 📝 'Settings' Inner Modal 📝 --------------
const settingsInnerModal = document.querySelector('.settings-inner-modal');
const settingsInnerContainer = document.querySelector('.settings-inner-container');
const settingsModalBox = document.querySelector('.settings-inner-container--box');

const modalCloseBtn = document.querySelectorAll('.close-inner-modal-container');
const modalCancelBtn = document.querySelectorAll('.modal-cancel-btn');

const editUsernameBtn = document.getElementById('editUsernameBtn');
const editListNameBtn = document.getElementById('editListNameBtn');
const resetListBtn = document.getElementById('resetListBtn');

const smallModalHeader = document.getElementById('smallModalHeader');
const smallModalP1 = document.getElementById('smallModalP1');
const smallModalP2 = document.getElementById('smallModalP2');
const smallModalInput = document.getElementById('smallModalInput');
const smallModalBtnMain = document.getElementById('smallModalBtnMain');

function openSettingsInnerModal() {
    settingsInnerModal.style.display = 'flex';
    settingsInnerContainer.style.display = 'flex';
    settingsInnerContainer.classList.add('active');

    // Close modal on outside click
    if (settingsInnerContainer.classList.contains('active')) {
        settingsInnerContainer.addEventListener('click', (e) => {
            const clicked = e.target;

            if (clicked.classList.contains('settings-inner-container')) {
                closeSettingsInnerModal();
            }
        });
    }

    settingsModal.classList.remove('settings-modal-active');
}

function closeSettingsInnerModal() {
    settingsInnerModal.style.display = 'none';
    settingsInnerContainer.style.display = 'none';
    settingsInnerContainer.classList.remove('active');
    settingsModalBox.classList.remove('edit-username-active', 'edit-list-name-active', 'reset-list-active');
    smallModalInput.value = '';

    settingsModal.classList.add('settings-modal-active');
}

function openEditUsername() {
    openSettingsInnerModal();
    smallModalHeader.innerHTML = 'Change Your <span class="highlight">Username</span>';
    smallModalP1.innerHTML = `Your current username is <span class="emphasis">${username}</span>.`;
    smallModalP2.innerHTML = 'You can update your username below:';
    smallModalInput.style.display = 'flex';
    smallModalInput.placeholder = 'Enter a New Username...';
    smallModalBtnMain.classList.add('btn-primary');
    smallModalBtnMain.classList.remove('btn-negative');
    smallModalBtnMain.textContent = 'Change';

    settingsModalBox.classList.add('edit-username-active');
}

function openEditListName() {
    openSettingsInnerModal();
    smallModalHeader.innerHTML = 'Change Your <span class="highlight">List Name</span>';
    smallModalP1.innerHTML = `Your current list name is <span class="emphasis">${listName}</span>.`;
    smallModalP2.innerHTML = 'You can update your list name below:';
    smallModalInput.style.display = 'flex';
    smallModalInput.placeholder = 'Enter a New List Name...';
    smallModalBtnMain.classList.add('btn-primary');
    smallModalBtnMain.classList.remove('btn-negative');
    smallModalBtnMain.textContent = 'Change';

    settingsModalBox.classList.add('edit-list-name-active');
}

function openResetList() {
    openSettingsInnerModal();
    smallModalHeader.innerHTML = '<span class="highlight-negative">Reset</span> Your List?';
    smallModalP1.innerHTML = 'You will be unable to recover your data once your list has been reset.';
    smallModalP2.innerHTML = 'Are you sure?';
    smallModalInput.style.display = 'none';
    smallModalBtnMain.classList.add('btn-negative');
    smallModalBtnMain.classList.remove('btn-primary');
    smallModalBtnMain.textContent = 'Reset';

    settingsModalBox.classList.add('reset-list-active');
}

editUsernameBtn.addEventListener('click', openEditUsername);
editListNameBtn.addEventListener('click', openEditListName);
resetListBtn.addEventListener('click', openResetList);

modalCloseBtn.forEach((closeBtn) => {
    closeBtn.addEventListener('click', closeSettingsInnerModal);
});

modalCancelBtn.forEach((cancelBtn) => {
    cancelBtn.addEventListener('click', closeSettingsInnerModal);
});


// Update All Info (username, list name, stats etc.)
function updateInfo() {
    usernameText.forEach((name) => {
        name.textContent = username;
    });

    listNameText.forEach((name) => {
        name.textContent = listName;
    });
}

// Submit decision on click
smallModalBtnMain.addEventListener('click', () => {
    if (settingsModalBox.classList.contains('edit-username-active')) {
        // Change Username
        if (smallModalInput.value != '') {
            username = smallModalInput.value;
            closeSettingsInnerModal();
            updateInfo();
        }
    } else if (settingsModalBox.classList.contains('edit-list-name-active')) {
        // Change List Name
        if (smallModalInput.value != '') {
            listName = smallModalInput.value;
            closeSettingsInnerModal();
            updateInfo();
        }
    } else if (settingsModalBox.classList.contains('reset-list-active')) {
        // Reset List
    } else if (settingsModalBox.classList.contains('add-to-do-active')) {
        // Add Item to List (Small Screen)
        if (smallModalInput.value !== '') {
            addToDo();
        }
    }
});

// Submit decision on 'Enter' pressed
document.addEventListener('keydown', (e) => {
    const pressed = e.key;

    if (pressed === 'Enter') {
        if (settingsInnerContainer.classList.contains('active')) {
            if (settingsModalBox.classList.contains('edit-username-active')) {
                if (smallModalInput.value != '') {
                    // Change Username
                    username = smallModalInput.value;
                    closeSettingsInnerModal();
                    updateInfo();
                }
            } else if (settingsModalBox.classList.contains('edit-list-name-active')) {
                if (smallModalInput.value != '') {
                    // Change List Name
                    listName = smallModalInput.value;
                    closeSettingsInnerModal();
                    updateInfo();
                }
            } else if (settingsModalBox.classList.contains('reset-list-active')) {
                // Reset List
            } else if (settingsModalBox.classList.contains('add-to-do-active')) {
                // Add Item to List (Small Screen)
                if (smallModalInput.value !== '') {
                    addToDo();
                }
            }
        } else if (addInputLg === document.activeElement) {
            // Add Item to List (Large Screen)
            if (addInputLg.value !== '') {
                addToDo();
            }
        }
    } else if (pressed === 'Escape') {
        if (settingsInnerContainer.classList.contains('active')) {
            closeSettingsInnerModal();
        } else if (settingsModal.classList.contains('settings-modal-active')) {
            // Close Settings Modal:
            closeModal();
        }
    }
});


// ---------- 📥 'Add' To-Do Items 📥 --------------
const addBtnLg = document.getElementById('addBtnLg');
const addInputLg = document.getElementById('addInputLg');
const addBtnSm = document.getElementById('addBtnSm');

const emptyListDisplay = document.querySelector('.empty-list-display');
const listItemContainer = document.querySelector('.list-item-container');

function openAddToDoModal() {
    openSettingsInnerModal();
    smallModalHeader.innerHTML = '<span class="highlight">Add</span> a To-Do Item';
    smallModalP1.innerHTML = 'Write a new to-do entry below:';
    smallModalP2.style.display = 'none';
    smallModalInput.style.display = 'flex';
    smallModalInput.placeholder = 'Add a To-Do Entry...';
    smallModalBtnMain.classList.add('btn-primary');
    smallModalBtnMain.classList.remove('btn-negative');
    smallModalBtnMain.textContent = 'Add';

    settingsModalBox.classList.add('add-to-do-active');
}

function createNewToDo(listContent) {
    listedTodos++;

    const toDoItemContainer = document.querySelector('.to-do-item-container');

    // Create a new to-do item
    const newToDoItem = document.createElement('div');
    newToDoItem.classList.add('to-do-item');
    toDoItemContainer.appendChild(newToDoItem);

    const newToDoItemBackground = document.createElement('div');
    newToDoItemBackground.classList.add('to-do-item-background');
    newToDoItem.appendChild(newToDoItemBackground);

    const newStarContainer = document.createElement('div');
    newStarContainer.classList.add('star-container');
    newToDoItem.appendChild(newStarContainer);

    const newStarContainerIcon = document.createElement('i');
    newStarContainerIcon.classList.add('fas', 'fa-star');
    newStarContainer.appendChild(newStarContainerIcon);

    const newItemContentMain = document.createElement('div');
    newItemContentMain.classList.add('item-content-main');
    newToDoItem.appendChild(newItemContentMain);

    const newToDoItemCheckbox = document.createElement('div');
    newToDoItemCheckbox.classList.add('to-do-item--checkbox');
    newItemContentMain.appendChild(newToDoItemCheckbox);

    const newToDoItemCheckboxIcon = document.createElement('i');
    newToDoItemCheckboxIcon.classList.add('far', 'fa-circle', 'fa-2x');
    newToDoItemCheckbox.appendChild(newToDoItemCheckboxIcon);

    const toDoItemContent = document.createElement('div');
    toDoItemContent.classList.add('to-do-item--content');
    newItemContentMain.appendChild(toDoItemContent);

    const newContentText = document.createElement('div');
    newContentText.classList.add('content-text');
    toDoItemContent.appendChild(newContentText);

    const newContentTextToDo = document.createElement('p');
    newContentTextToDo.classList.add('content-text--to-do');
    newContentText.appendChild(newContentTextToDo);
    newContentTextToDo.textContent = listContent;

    const newContentTextDate = document.createElement('p');
    newContentTextDate.classList.add('content-text--date');
    newContentText.appendChild(newContentTextDate);
    newContentTextDate.textContent = `${printDate()}`;

    const newItemContentIcons = document.createElement('div');
    newItemContentIcons.classList.add('item-content-icons');
    newToDoItem.appendChild(newItemContentIcons);

    const newToDoItemPriority = document.createElement('div');
    newToDoItemPriority.classList.add('to-do-item--priority');
    newItemContentIcons.appendChild(newToDoItemPriority);

    const newToDoItemPriorityIcon = document.createElement('i');
    newToDoItemPriorityIcon.classList.add('far', 'fa-star');
    newToDoItemPriority.appendChild(newToDoItemPriorityIcon);

    const newToDoItemEdit = document.createElement('div');
    newToDoItemEdit.classList.add('to-do-item--edit');
    newItemContentIcons.appendChild(newToDoItemEdit);

    const newToDoItemEditIcon = document.createElement('i');
    newToDoItemEditIcon.classList.add('fas', 'fa-edit');
    newToDoItemEdit.appendChild(newToDoItemEditIcon);

    const newToDoItemRemove = document.createElement('div');
    newToDoItemRemove.classList.add('to-do-item--remove');
    newItemContentIcons.appendChild(newToDoItemRemove);

    const newToDoItemRemoveIcon = document.createElement('i');
    newToDoItemRemoveIcon.classList.add('fas', 'fa-trash-alt');
    newToDoItemRemove.appendChild(newToDoItemRemoveIcon);
}

function checkListedToDos() {
    if (listedTodos > 0) {
        emptyListDisplay.style.display = 'none';
        listItemContainer.style.display = 'flex';
    } else {
        emptyListDisplay.style.display = 'flex';
        listItemContainer.style.display = 'none';
    }
}

function addToDo() {
    if (settingsModalBox.classList.contains('add-to-do-active')) {
        settingsModalBox.classList.remove('add-to-do-active');
        createNewToDo(smallModalInput.value);
        checkListedToDos();
        closeSettingsInnerModal();
    } else {
        if (addInputLg.value != '') {
            createNewToDo(addInputLg.value);
            checkListedToDos();
            addInputLg.value = '';
        }
    }
}

addBtnLg.addEventListener('click', addToDo);
addBtnSm.addEventListener('click', openAddToDoModal);
