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

function addToDo() {
    if (settingsModalBox.classList.contains('add-to-do-active')) {
        console.log('Small input value added!');

        settingsModalBox.classList.remove('add-to-do-active');

        closeSettingsInnerModal();
    } else {
        if (addInputLg.value !== '') {
            console.log('Big input value added!');
            addInputLg.value = '';
        }
    }
}

addBtnLg.addEventListener('click', addToDo);
addBtnSm.addEventListener('click', openAddToDoModal);
