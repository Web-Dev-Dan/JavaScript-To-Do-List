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
}

function openSettings() {
    openModalBackground();
    settingsModal.style.display = 'flex';
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


// ---------- 📝 'Settings' Inner Modal 📝 --------------
const settingsInnerModal = document.querySelector('.settings-inner-modal');
const settingsInnerContainer = document.querySelector('.settings-inner-container');
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
}

function closeSettingsInnerModal() {
    settingsInnerModal.style.display = 'none';
    settingsInnerContainer.style.display = 'none';
    settingsInnerContainer.classList.remove('active');
}

function openEditUsername() {
    openSettingsInnerModal();
    smallModalHeader.innerHTML = 'Change Your <span class="highlight">Username</span>';
    smallModalP1.innerHTML = `Your current username is <span class="emphasis">Bob</span>.`;
    smallModalP2.innerHTML = 'You can update your username below:';
    smallModalInput.style.display = 'flex';
    smallModalInput.placeholder = 'Enter a New Username...';
    smallModalBtnMain.classList.add('btn-primary');
    smallModalBtnMain.classList.remove('btn-negative');
    smallModalBtnMain.textContent = 'Change';
}

function openEditListName() {
    openSettingsInnerModal();
    smallModalHeader.innerHTML = 'Change Your <span class="highlight">List Name</span>';
    smallModalP1.innerHTML = `Your current list name is <span class="emphasis">Some List</span>.`;
    smallModalP2.innerHTML = 'You can update your list name below:';
    smallModalInput.style.display = 'flex';
    smallModalInput.placeholder = 'Enter a New List Name...';
    smallModalBtnMain.classList.add('btn-primary');
    smallModalBtnMain.classList.remove('btn-negative');
    smallModalBtnMain.textContent = 'Change';
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
