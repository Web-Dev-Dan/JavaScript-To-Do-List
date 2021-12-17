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

function openModalBackground() {
    modalBackground.style.display = 'flex';
}

function closeModal() {
    modalBackground.style.display = 'none';
}

function openSettings() {
    openModalBackground();
}

settingsBtn.addEventListener('click', openSettings);
modalBackground.addEventListener('click', closeModal);
