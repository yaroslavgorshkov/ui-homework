document.addEventListener("DOMContentLoaded", () => {
    createDropdown(".js-dropdown", ".js-dropdown-btn", ".js-dropdown-menu");
})

function createDropdown(dropdownSelector, dropdownBtnSelector, dropdownMenuSelector) {
    const dropdown = document.querySelector(dropdownSelector);
    const dropdownBtn = dropdown.querySelector(dropdownBtnSelector);
    const dropdownMenu = dropdown.querySelector(dropdownMenuSelector);
    dropdownBtn.addEventListener('click', () => {
        toggleVisibilityOfDropdownMenu(dropdownMenu);
    })

    document.addEventListener("click", event => {
        if(dropdownMenu.classList.contains("d-block") && !dropdownMenu.contains(event.target) && !dropdownBtn.contains(event.target)) {
            toggleVisibilityOfDropdownMenu(dropdownMenu);            
        }
    })
}

function toggleVisibilityOfDropdownMenu(dropdownMenu) {
    if(dropdownMenu.classList.contains("d-none")) {
        makeDropdownMenuOpen(dropdownMenu);
    } else {
        makeDropdownMenuClosed(dropdownMenu);
    } 
}

function makeDropdownMenuOpen(dropdownMenu) {
    dropdownMenu.classList.remove("d-none");
    dropdownMenu.classList.remove("removing");
    dropdownMenu.classList.add("d-block");
}

function makeDropdownMenuClosed(dropdownMenu) {
    dropdownMenu.classList.remove("d-block");
    dropdownMenu.classList.add("d-none");
    setTimeout(() => {
        dropdownMenu.classList.add("removing");
    }, 300);
}

