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

// const todaysFullDate = `${weekdays[day]} ${date} ${months[month]}, ${year}`;

function printDate() {
    const newDate = new Date();
    const day = newDate.getDay();
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    return `Added ${weekdays[day]} ${date} ${months[month]}, ${year}`;
}

function printCurrentDate() {
    const newDate = new Date();
    const day = newDate.getDay();
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    return `${weekdays[day]} ${date} ${months[month]}, ${year}`;
}


// ---------- ⏱ Time ⏱ --------------
function printCurrentTime() {
    const newDate = new Date();
    const minutes = newDate.getMinutes();

    if (minutes >= 0 && minutes <= 9) {
        return `${newDate.getHours()}:0${minutes}`;
    } else {
        return `${newDate.getHours()}:${minutes}`;
    }
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

    updateStats();
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


// ---------- 🔎 Filter Items 🔍 --------------
const toDoItemcontainer = document.querySelector('.to-do-item-container');

const toggleOrderBtn = document.querySelectorAll('#toggleOrderBtn');
const toggleAllBtn = document.querySelectorAll('#toggleAllBtn');
const toggleCompleteBtn = document.querySelectorAll('#toggleCompleteBtn');
const toggleIncompleteBtn = document.querySelectorAll('#toggleIncompleteBtn');
const togglePrioritisedBtn = document.querySelectorAll('#togglePrioritisedBtn');

// Toggle List Order
toggleOrderBtn.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toDoItemcontainer.classList.toggle('to-do-item-container-reverse');
    });
});

// 🔎📝 Show All:
toggleAllBtn.forEach((filter) => {
    filter.addEventListener('click', () => {
        filter.classList.add('filter-active');

        toggleCompleteBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });
        toggleIncompleteBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });
        togglePrioritisedBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });

        const toDoItem = document.querySelectorAll('.to-do-item');

        toDoItem.forEach((item) => {
            if (item) {
                item.style.display = 'flex';
            }
        });
    });
});

// 🔎✅ Show Complete:
toggleCompleteBtn.forEach((filter) => {
    filter.addEventListener('click', () => {
        filter.classList.add('filter-active');

        toggleAllBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });
        toggleIncompleteBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });
        togglePrioritisedBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });

        const toDoItem = document.querySelectorAll('.to-do-item');

        toDoItem.forEach((item) => {
            if (item.classList.contains('item-complete')) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 🔎❌ Show Incomplete:
toggleIncompleteBtn.forEach((filter) => {
    filter.addEventListener('click', () => {
        filter.classList.add('filter-active');

        toggleAllBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });
        toggleCompleteBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });
        togglePrioritisedBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });

        const toDoItem = document.querySelectorAll('.to-do-item');

        toDoItem.forEach((item) => {
            if (item.classList.contains('item-complete')) {
                item.style.display = 'none';
            } else {
                item.style.display = 'flex';
            }
        });
    });
});

// 🔎⭐️ Show Prioritised:
togglePrioritisedBtn.forEach((filter) => {
    filter.addEventListener('click', () => {
        filter.classList.add('filter-active');

        toggleAllBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });
        toggleCompleteBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });
        toggleIncompleteBtn.forEach((button) => {
            button.classList.remove('filter-active');
        });

        const toDoItem = document.querySelectorAll('.to-do-item');

        toDoItem.forEach((item) => {
            if (item.classList.contains('item-priority')) {
                if (item.classList.contains('item-complete')) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            } else {
                item.style.display = 'none';
            }
        });
    });
});


// ---------- 📊 List Details 📊 --------------
let listName = 'To-Do List';
let username = 'User';

let targetItem;
let itemToEdit;

let toDos = 0; /* Total on display (complete and incomplete) */
let listedTodos = 0; /* Pending Items */
let prioritisedTodos = 0; /* Prioritised Items */
let completedTodos = 0; /* Completed Items */

let completeClicks = 0;
let createClicks = 0;
let editClicks = 0;
let deleteClicks = 0;

const usernameText = document.querySelectorAll('.username');
const listNameText = document.querySelectorAll('.listName');
const listedTodosText = document.getElementById('listedTodosText');
const prioritisedTodosText = document.getElementById('prioritisedTodosText');

usernameText.forEach((name) => {
    name.textContent = username;
});

listNameText.forEach((name) => {
    name.textContent = listName;
});


// ---------- 📊 Update Stats 📊 --------------
function updateStats() {
    const itemsCompletedText = document.getElementById('itemsCompletedText');
    const itemsCreatedText = document.getElementById('itemsCreatedText');
    const itemEditsText = document.getElementById('itemEditsText');
    const itemsDeletedText = document.getElementById('itemsDeletedText');
    const pendingItemsText = document.getElementById('pendingItemsText');
    const prioritisedItemsText = document.getElementById('prioritisedItemsText');

    itemsCompletedText.textContent = completeClicks;
    itemsCreatedText.textContent = createClicks;
    itemEditsText.textContent = editClicks;
    itemsDeletedText.textContent = deleteClicks;

    pendingItemsText.textContent = listedTodos;
    prioritisedItemsText.textContent = prioritisedTodos;
}


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

    if (listedTodos === 1) {
        listedTodosText.innerHTML = `There is currently <span class="emphasis">${listedTodos} item</span> pending on your
        list.`;
    } else {
        listedTodosText.innerHTML = `There are currently <span class="emphasis">${listedTodos} items</span> pending on your
        list.`;
    }

    if (prioritisedTodos === 1) {
        prioritisedTodosText.innerHTML = `You have <span class="emphasis">${prioritisedTodos} prioritised item</span>.`;

    } else {
        prioritisedTodosText.innerHTML = `You have <span class="emphasis">${prioritisedTodos} prioritised items</span>.`;

    }
}

// Submit decision on click
smallModalBtnMain.addEventListener('click', () => {
    if (settingsModalBox.classList.contains('edit-username-active')) {
        // Change Username
        if (smallModalInput.value != '') {
            username = smallModalInput.value;
            recentActivityType = 'edit-username';
            recentActivityItem = smallModalInput.value;
            checkRecentActivity();
            closeSettingsInnerModal();
            updateInfo();
        }
    } else if (settingsModalBox.classList.contains('edit-list-name-active')) {
        // Change List Name
        if (smallModalInput.value != '') {
            listName = smallModalInput.value;
            recentActivityType = 'edit-list-name';
            recentActivityItem = smallModalInput.value;
            checkRecentActivity();
            closeSettingsInnerModal();
            updateInfo();
        }
    } else if (settingsModalBox.classList.contains('reset-list-active')) {
        // Reset List
        resetList();
    } else if (settingsModalBox.classList.contains('add-to-do-active')) {
        // Add Item to List (Small Screen)
        if (smallModalInput.value !== '') {
            addToDo();
            updateInfo();
        }
    } else if (settingsModalBox.classList.contains('edit-item-active')) {
        if (smallModalInput.value != '') {
            // Edit Item
            itemToEdit.textContent = smallModalInput.value;
            recentActivityItem = smallModalInput.value;

            editClicks++;
            settingsModalBox.classList.remove('edit-item-active');
            closeSettingsInnerModal();
            updateInfo();
            recentActivityType = 'edit';
            checkRecentActivity();
        }
    } else if (settingsModalBox.classList.contains('delete-item-active')) {
        // Delete Item
        if (targetItem.classList.contains('item-priority')) {
            if (targetItem.classList.contains('item-complete')) {
                // Nothing happens
            } else {
                listedTodos--;
                prioritisedTodos--;
            }
        } else if (targetItem.classList.contains('item-complete')) {
            // Nothing happens
        } else {
            listedTodos--;
        }
        const recentActivityItemContainer = targetItem.querySelector('.content-text--to-do');
        recentActivityItem = recentActivityItemContainer.textContent;

        targetItem.remove();
        deleteClicks++;
        toDos--;
        closeSettingsInnerModal();
        updateInfo();
        checkListedToDos();
        recentActivityType = 'delete';
        checkRecentActivity();
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
                    recentActivityType = 'edit-username';
                    recentActivityItem = smallModalInput.value;
                    checkRecentActivity();
                    closeSettingsInnerModal();
                    updateInfo();
                }
            } else if (settingsModalBox.classList.contains('edit-list-name-active')) {
                if (smallModalInput.value != '') {
                    // Change List Name
                    listName = smallModalInput.value;
                    recentActivityType = 'edit-list-name';
                    recentActivityItem = smallModalInput.value;
                    checkRecentActivity();
                    closeSettingsInnerModal();
                    updateInfo();
                }
            } else if (settingsModalBox.classList.contains('reset-list-active')) {
                // Reset List
                resetList();
            } else if (settingsModalBox.classList.contains('add-to-do-active')) {
                // Add Item to List (Small Screen)
                if (smallModalInput.value !== '') {
                    addToDo();
                    updateInfo();
                }
            } else if (settingsModalBox.classList.contains('edit-item-active')) {
                if (smallModalInput.value != '') {
                    // Edit Item
                    itemToEdit.textContent = smallModalInput.value;
                    recentActivityItem = smallModalInput.value;

                    editClicks++;
                    settingsModalBox.classList.remove('edit-item-active');
                    closeSettingsInnerModal();
                    updateInfo();
                    recentActivityType = 'edit';
                    checkRecentActivity();
                }
            } else if (settingsModalBox.classList.contains('delete-item-active')) {
                // Delete Item
                if (targetItem.classList.contains('item-priority')) {
                    if (targetItem.classList.contains('item-complete')) {
                        // Nothing happens
                    } else {
                        listedTodos--;
                        prioritisedTodos--;
                    }
                } else if (targetItem.classList.contains('item-complete')) {
                    // Nothing happens
                } else {
                    listedTodos--;
                }
                const recentActivityItemContainer = targetItem.querySelector('.content-text--to-do');
                recentActivityItem = recentActivityItemContainer.textContent;

                targetItem.remove();
                deleteClicks++;
                toDos--;
                closeSettingsInnerModal();
                updateInfo();
                checkListedToDos();
                recentActivityType = 'delete';
                checkRecentActivity();
            }
        } else if (addInputLg === document.activeElement) {
            // Add Item to List (Large Screen)
            if (addInputLg.value !== '') {
                addToDo();
                updateInfo();
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
    toDos++;
    createClicks++;
    listedTodos++;
    updateProgress(5);
    updateInfo();

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
    newToDoItemCheckboxIcon.id = 'checkboxIcon';

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

    recentActivityItem = listContent;

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
    newToDoItemPriorityIcon.id = 'prioritiseIcon';

    const newToDoItemEdit = document.createElement('div');
    newToDoItemEdit.classList.add('to-do-item--edit');
    newItemContentIcons.appendChild(newToDoItemEdit);

    const newToDoItemEditIcon = document.createElement('i');
    newToDoItemEditIcon.classList.add('fas', 'fa-edit');
    newToDoItemEdit.appendChild(newToDoItemEditIcon);
    newToDoItemEditIcon.id = 'editIcon';

    const newToDoItemRemove = document.createElement('div');
    newToDoItemRemove.classList.add('to-do-item--remove');
    newItemContentIcons.appendChild(newToDoItemRemove);

    const newToDoItemRemoveIcon = document.createElement('i');
    newToDoItemRemoveIcon.classList.add('fas', 'fa-trash-alt');
    newToDoItemRemove.appendChild(newToDoItemRemoveIcon);
    newToDoItemRemoveIcon.id = 'removeIcon';
}

function checkListedToDos() {
    if (toDos > 0) {
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
    recentActivityType = 'add';
    checkRecentActivity();
}

addBtnLg.addEventListener('click', addToDo);
addBtnSm.addEventListener('click', openAddToDoModal);


// ---------- ✅⭐️🛠❌ To-Do Item Functionality ✅⭐️🛠❌ --------------
function completeToDoItem(item, icon) {
    const recentActivityItemContainer = item.querySelector('.content-text--to-do');
    recentActivityItem = recentActivityItemContainer.textContent;

    item.classList.add('item-complete');
    icon.classList.remove('far', 'fa-circle');
    icon.classList.add('fas', 'fa-check-circle');
    icon.removeAttribute('id');

    if (item.classList.contains('item-priority')) {
        listedTodos--;
        prioritisedTodos--;
        completedTodos++;
        completeClicks++;
        updateProgress(20);
        updateInfo();
    } else {
        listedTodos--;
        completedTodos++;
        completeClicks++;
        updateProgress(10);
        updateInfo();
    }
    recentActivityType = 'complete';
    checkRecentActivity();
}

function prioritiseToDoItem(item, icon) {
    const recentActivityItemContainer = item.querySelector('.content-text--to-do');
    recentActivityItem = recentActivityItemContainer.textContent;

    if (item.classList.contains('item-complete')) {
        // Nothing happens
    } else {
        if (item.classList.contains('item-priority')) {
            item.classList.remove('item-priority');
            icon.classList.add('far');
            icon.classList.remove('fas');
            icon.style.color = '#808080';
            prioritisedTodos--;
            updateInfo();
            recentActivityType = 'unprioritised';
            checkRecentActivity();
        } else {
            item.classList.add('item-priority');
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = 'var(--color-primary)';
            prioritisedTodos++;
            updateInfo();
            recentActivityType = 'priority';
            checkRecentActivity();
        }
    }
}

function openEditItemModal() {
    openSettingsInnerModal();
    smallModalHeader.innerHTML = '<span class="highlight">Edit</span> Your To-Do Item';
    smallModalP1.innerHTML = 'You can edit your to-do item below:';
    smallModalP2.style.display = 'none';
    smallModalInput.style.display = 'flex';
    smallModalInput.placeholder = 'Edit Your To-Do Item...';
    smallModalInput.value = itemToEdit.textContent;
    smallModalBtnMain.classList.remove('btn-negative');
    smallModalBtnMain.classList.add('btn-primary');
    smallModalBtnMain.textContent = 'Edit';

    settingsModalBox.classList.add('edit-item-active');
}

function openDeleteItemModal() {
    openSettingsInnerModal();
    smallModalHeader.innerHTML = '<span class="highlight-negative">Delete</span> Your To-Do Item?';
    smallModalP1.innerHTML = 'You will be unable to recover your data once it has been deleted.';
    smallModalP2.innerHTML = 'Are you sure?';
    smallModalInput.style.display = 'none';
    smallModalBtnMain.classList.add('btn-negative');
    smallModalBtnMain.classList.remove('btn-primary');
    smallModalBtnMain.textContent = 'Delete';

    settingsModalBox.classList.add('delete-item-active');
}

function checkClickedIcon(e) {
    const clickedIcon = e.target;

    const clickedParent = clickedIcon.parentElement;
    const clickedGrandparent = clickedParent.parentElement;
    const clickedToDoItem = clickedGrandparent.parentElement;

    if (clickedIcon.id === 'checkboxIcon') {
        completeToDoItem(clickedToDoItem, clickedIcon);
    } else if (clickedIcon.id === 'prioritiseIcon') {
        prioritiseToDoItem(clickedToDoItem, clickedIcon);
    } else if (clickedIcon.id === 'editIcon') {
        if (clickedToDoItem.classList.contains('item-complete')) {
            // Nothing happens
        } else {
            targetItem = clickedToDoItem;
            itemToEdit = clickedToDoItem.querySelector('.content-text--to-do');
            openEditItemModal();
        }
    } else if (clickedIcon.id === 'removeIcon') {
        targetItem = clickedToDoItem;
        openDeleteItemModal();
    }
}

document.addEventListener('click', checkClickedIcon);


// ---------- 🛎 Recent Activity 🛎 --------------
const recentBox = document.querySelector('.recent-box');
const recentBoxText = document.querySelector('.recent-box--text');
const recentBoxItem = document.querySelector('.recent-box--item-text');
const recentBoxEmpty = document.querySelector('.recent-box--empty');

let recentActivityType;
let recentActivityText;
let recentActivityItem;

function checkRecentActivity() {
    if (recentActivityType) {
        recentBox.style.display = 'flex';
        recentBoxEmpty.style.display = 'none';
        if (recentActivityType === 'add') {
            recentBoxText.innerHTML = `The following item was <span class="emphasis highlight">added</span> to '${listName}' at ${printCurrentTime()} on ${printCurrentDate()}:`;
            recentBoxItem.textContent = recentActivityItem;
        } else if (recentActivityType === 'priority') {
            recentBoxText.innerHTML = `The following item was <span class="emphasis highlight">prioritised</span> at ${printCurrentTime()} on ${printCurrentDate()}:`;
            recentBoxItem.textContent = recentActivityItem;
        } else if (recentActivityType === 'unprioritised') {
            recentBoxText.innerHTML = `The following item was <span class="emphasis highlight">unprioritised</span> at ${printCurrentTime()} on ${printCurrentDate()}:`;
            recentBoxItem.textContent = recentActivityItem;
        } else if (recentActivityType === 'complete') {
            recentBoxText.innerHTML = `The following item was <span class="emphasis highlight">completed</span> at ${printCurrentTime()} on ${printCurrentDate()}:`;
            recentBoxItem.textContent = recentActivityItem;
        } else if (recentActivityType === 'edit') {
            recentBoxText.innerHTML = `The following item was <span class="emphasis highlight">edited</span> at ${printCurrentTime()} on ${printCurrentDate()}:`;
            recentBoxItem.textContent = recentActivityItem;
        } else if (recentActivityType === 'delete') {
            recentBoxText.innerHTML = `The following item was <span class="emphasis highlight-negative">deleted</span> at ${printCurrentTime()} on ${printCurrentDate()}:`;
            recentBoxItem.textContent = recentActivityItem;
        } else if (recentActivityType === 'edit-username') {
            recentBoxText.innerHTML = `Username was <span class="emphasis highlight">edited</span> at ${printCurrentTime()} on ${printCurrentDate()} to:`;
            recentBoxItem.textContent = recentActivityItem;
        } else if (recentActivityType === 'edit-list-name') {
            recentBoxText.innerHTML = `List name was <span class="emphasis highlight">edited</span> at ${printCurrentTime()} on ${printCurrentDate()} to:`;
            recentBoxItem.textContent = recentActivityItem;
        }
    } else {
        recentBox.style.display = 'none';
        recentBoxEmpty.style.display = 'flex';
    }
}


// ---------- 📶 User Progress 📶 --------------
let totalXP = 0;
let level = 1;
let progress = 0;
let progressBar = document.querySelector('.progress-bar-inner');
let quote;

const totalXPText = document.querySelector('.total-xp-text');
const totalLevelText = document.querySelector('.total-level-text');
const quoteText = document.querySelector('.quote-text');

function calcProgressBar() {
    if (progress >= 100) {
        progress -= 100;
        level += 1;
    }
}

function checkLevel(level) {
    const lvl1Quotes = [`It's time to get productive!`, `What do you want to get done today?`, `Add tasks to your list and complete them to earn extra points!`, `You can earn 10 points when you complete a task, or 20 points when you complete a prioritised task!`, `You can get 5 points for simply creating a to-do item! What are you waiting for?`];
    const lvl2Quotes = [...lvl1Quotes, `You're doing great! Keep going!`];
    const lvl3Quotes = [...lvl2Quotes, `This is some productivity! There's no stopping you!`];
    const lvl4Quotes = [...lvl3Quotes, `Level ${level}?! You're a task machine!`];

    switch (level) {
        case 1:
            quoteText.textContent = lvl1Quotes[Math.floor(Math.random() * lvl1Quotes.length)];
            break;
        case 2:
            quoteText.textContent = lvl2Quotes[Math.floor(Math.random() * lvl2Quotes.length)];
            break;
        case 3:
            quoteText.textContent = lvl3Quotes[Math.floor(Math.random() * lvl3Quotes.length)];
            break;
        case 4:
            quoteText.textContent = lvl4Quotes[Math.floor(Math.random() * lvl4Quotes.length)];
            break;
        default:
            quoteText.textContent = `Level ${level}?! You're a task machine!`;
    }
}

function updateProgress(xp) {
    totalXP += xp;
    progress += xp;

    calcProgressBar();
    totalXPText.textContent = totalXP;
    totalLevelText.textContent = level;
    progressBar.style.width = `${progress}%`;
    checkLevel(level);
}


// ---------- 🔄 Reset List 🔄 --------------
function resetList() {
    window.location.reload();
}
