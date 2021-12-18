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
