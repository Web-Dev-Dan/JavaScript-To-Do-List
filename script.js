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

    root.style.setProperty('--color-complete', 'rgb(69, 112, 87)');
    root.style.setProperty('--color-priority', 'rgb(87, 87, 1)');
}

function toggleLightMode() {
    toggleInner.style.transform = 'translateY(0)';
    root.style.setProperty('--color-white', '#ffffff');
    root.style.setProperty('--color-black', '#333333');
    root.style.setProperty('--color-dark', '#444444');
    root.style.setProperty('--color-light', '#f1f1f1');

    root.style.setProperty('--color-complete', 'rgb(226, 252, 237)');
    root.style.setProperty('--color-priority', 'rgb(255, 255, 205)');
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




// ------- To-Do List Filters --------
// 1. Toggle To-Do Container Order Button:
const toDoItemContainer = document.querySelector('.to-do-item-container');
const toggleListOrderBtn = document.querySelectorAll('#toggleListOrderBtn');
const showAllBtn = document.querySelectorAll('#showAllBtn');
const showCompleteBtn = document.querySelectorAll('#showCompleteBtn');
const showIncompleteBtn = document.querySelectorAll('#showIncompleteBtn');
const showPrioritisedBtn = document.querySelectorAll('#showPrioritisedBtn');

toggleListOrderBtn.forEach((orderBtn) => {
    orderBtn.addEventListener('click', () => {
        toDoItemContainer.classList.toggle('reverse-order');
    });
});

// 2. Toggle 'All':
showAllBtn.forEach((showAll) => {
    showAll.addEventListener('click', () => {
        showAll.classList.add('filter-active');

        showCompleteBtn.forEach((showComplete) => {
            showComplete.classList.remove('filter-active');
        });
        showIncompleteBtn.forEach((showIncomplete) => {
            showIncomplete.classList.remove('filter-active');
        });
        showPrioritisedBtn.forEach((showPrioritised) => {
            showPrioritised.classList.remove('filter-active');
        });

        const listItem = document.querySelectorAll('.to-do-item');
        listItem.forEach((item) => {
            item.style.display = 'flex';
        });
    });
});

// 3. Toggle 'Complete':
showCompleteBtn.forEach((showComplete) => {
    showComplete.addEventListener('click', () => {
        showComplete.classList.add('filter-active');

        showAllBtn.forEach((showAll) => {
            showAll.classList.remove('filter-active');
        });
        showIncompleteBtn.forEach((showIncomplete) => {
            showIncomplete.classList.remove('filter-active');
        });
        showPrioritisedBtn.forEach((showPrioritised) => {
            showPrioritised.classList.remove('filter-active');
        });

        const listItem = document.querySelectorAll('.to-do-item');
        listItem.forEach((item) => {
            if (item.classList.contains('item-complete')) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 4. Toggle Incomplete:
showIncompleteBtn.forEach((showIncomplete) => {
    showIncomplete.addEventListener('click', () => {
        showIncomplete.classList.add('filter-active');

        showAllBtn.forEach((showAll) => {
            showAll.classList.remove('filter-active');
        });
        showCompleteBtn.forEach((showComplete) => {
            showComplete.classList.remove('filter-active');
        });
        showPrioritisedBtn.forEach((showPrioritised) => {
            showPrioritised.classList.remove('filter-active');
        });

        const listItem = document.querySelectorAll('.to-do-item');
        listItem.forEach((item) => {
            if (item.classList.contains('item-complete')) {
                item.style.display = 'none';
            } else {
                item.style.display = 'flex';
            }
        });
    });
});

// 5. Toggle 'Prioritised':
showPrioritisedBtn.forEach((showPrioritised) => {
    showPrioritised.addEventListener('click', () => {
        showPrioritised.classList.add('filter-active');

        showAllBtn.forEach((showAll) => {
            showAll.classList.remove('filter-active');
        });
        showCompleteBtn.forEach((showComplete) => {
            showComplete.classList.remove('filter-active');
        });
        showIncompleteBtn.forEach((showIncomplete) => {
            showIncomplete.classList.remove('filter-active');
        });

        const listItem = document.querySelectorAll('.to-do-item');
        listItem.forEach((item) => {
            if (item.classList.contains('priority-item')) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
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
const smallAddBtn = document.getElementById('smallAddBtn');
const addItemBtn = document.querySelectorAll('#addItemBtn');
const addItemInput = document.querySelectorAll('#addItemInput');
let inputFieldActive = false;

addItemBtn.forEach((addBtn) => {
    addBtn.addEventListener('click', addItemToList);
});

smallAddBtn.addEventListener('click', openAddModal);

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
    newStarIcon.classList.add('far', 'fa-star', 'star-icon');
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



function addNewItemToList() {
    createNewItemElement();

    // ---------- ✅ Complete Checkbox ✅ --------------
    const checkboxCircleIcon = document.querySelectorAll('.fa-circle');

    checkboxCircleIcon.forEach((checkbox) => {
        checkbox.addEventListener('click', checkClickedIcon);
    });

    // ---------- ⭐️ Prioritise Button ⭐️ --------------
    const starIcon = document.querySelectorAll('.star-icon');

    starIcon.forEach((star) => {
        star.addEventListener('click', checkClickedIcon);
    });

    // ---------- 🛠 Edit Button 🛠 --------------
    const editIcon = document.querySelectorAll('.fa-edit');

    editIcon.forEach((editBtn) => {
        editBtn.addEventListener('click', checkClickedIcon);
    });

    // ---------- ❌ Delete Button ❌ --------------
    const deleteIcon = document.querySelectorAll('.fa-trash-alt');

    deleteIcon.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', checkClickedIcon);
    });
}

function checkClickedIcon(e) {
    const icon = e.target;

    const iconParent = icon.parentElement;
    const iconGrandparent = iconParent.parentElement;
    const iconItem = iconGrandparent.parentElement;

    // If unchecked, change to checked:
    if (icon.classList.contains('fa-circle')) {
        if (iconItem.classList.contains('priority-item')) {
            icon.classList.remove('far', 'fa-circle');
            icon.classList.add('fas', 'fa-check-circle');

            iconItem.classList.remove('priority-item');
            iconItem.classList.add('item-complete');

            console.log(iconItem);

            listedTodos--;
            prioritisedTodos--;
            updateSummary();
        } else {
            icon.classList.remove('far', 'fa-circle');
            icon.classList.add('fas', 'fa-check-circle');

            iconItem.classList.add('item-complete');

            console.log(iconItem);

            listedTodos--;
            updateSummary();
        }

    }

    // If blank star, change to filled (prioritised) star:
    else if (icon.classList.contains('far') && icon.classList.contains('fa-star')) {
        if (iconItem.classList.contains('item-complete')) {
            // Nothing happens
        } else {
            icon.classList.remove('far');
            icon.classList.add('fas');
            iconItem.classList.add('priority-item');
            prioritisedTodos++;
            updateSummary();
        }
    }

    // If filled (prioritised) star, change to blank star:
    else if (icon.classList.contains('fas') && icon.classList.contains('fa-star')) {
        if (iconItem.classList.contains('item-complete')) {
            // Nothing happens
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            iconItem.classList.remove('priority-item');
            prioritisedTodos--;
            updateSummary();
        }
    }

    // If delete icon, open modal to delete
    else if (icon.classList.contains('fa-trash-alt')) {
        openDeleteModal(iconItem);
    }

    // If edit icon, open modal to edit
    else if (icon.classList.contains('fa-edit')) {
        if (iconItem.classList.contains('item-complete')) {
            // Nothing happens
        } else {
            openEditModal();
        }
    }
}


// Open Default Modal
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');

function openModal() {
    window.scrollTo(0, 0);
    body.classList.toggle('body-fixed');
    modal.style.display = 'flex';
    modalInner.style.display = 'flex';
};

function closeModal() {
    body.classList.remove('body-fixed');
    modal.style.display = 'none';
    modalInner.style.display = 'none';
    currentModal = '';
}

modalInner.addEventListener('click', (e) => {
    const clickedArea = e.target;

    if (clickedArea.classList.contains('modal-inner')) {
        closeModal();
    }
});


// Customise Modal (Delete)
const modalHeader = document.querySelector('.modal-header');
const headerSpan = document.querySelector('.header-span');
const modalText1 = document.querySelector('.modal-text-1');
const modalText2 = document.querySelector('.modal-text-2');
const modalInput = document.querySelector('.modal-input');
const modalBtn = document.querySelector('.btn-main');
const btnCancel = document.querySelector('.btn-cancel');
const btnClose = document.querySelector('.btn-close');
let currentModal;

btnCancel.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
window.addEventListener('keydown', (e) => {
    const pressedKey = e.key;

    if (pressedKey === 'Escape') {
        closeModal();
    }
});

function openAddModal() {
    openModal();
    currentModal = 'add';

    modalHeader.innerHTML = '<span class="header-span" style="color: var(--color-primary)">Add</span> A To-Do Item';
    modalText1.textContent = 'Write a new to-do entry below:';
    modalText2.style.display = 'none';
    modalInput.style.display = 'flex';
    modalInput.placeholder = 'Add a to-do...';
    modalBtn.style.backgroundColor = 'var(--color-primary)';
    modalBtn.textContent = 'Add';
};

function openEditModal() {
    openModal();
    currentModal = 'edit';

    modalHeader.innerHTML = '<span class="header-span" style="color: var(--color-primary)">Edit</span> Your To-Do Item';
    modalText1.textContent = 'You can update your to-do item below:';
    modalText2.style.display = 'none';
    modalInput.style.display = 'flex';
    modalInput.placeholder = 'Whatever the item says';
    modalBtn.style.backgroundColor = 'var(--color-primary)';
    modalBtn.textContent = 'Edit';
};

function openDeleteModal(item) {
    const thisItem = item;

    openModal();
    currentModal = 'delete';

    modalHeader.innerHTML = '<span class="header-span" style="color: var(--color-negative)">Delete</span> Your To-Do Item?';
    modalText1.textContent = 'You will be unable to recover the data once it is deleted.';
    modalText2.textContent = 'Are you sure?';
    modalInput.style.display = 'none';
    modalBtn.style.backgroundColor = 'var(--color-negative)';
    modalBtn.textContent = 'Delete';

    window.addEventListener('keydown', (e) => {
        const pressedKey = e.key;

        if (pressedKey === 'Enter' && currentModal === 'delete') {
            console.log('Deleting');
            closeModal();
            deleteItem(thisItem);
        }
    });
};



function deleteItem(itemToDelete) {

    if (itemToDelete.classList.contains('item-complete')) {
        itemToDelete.remove();
    } else {
        listedTodos--;
        itemToDelete.remove();
        updateSummary();
    }

}
