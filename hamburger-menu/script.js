document.addEventListener("DOMContentLoaded", () => {
    makeHamburgerMenu(".js-hamburger-menu", ".js-hamburger-menu-btn", ".js-hamburger-menu-btn__svg-container", ".js-hamburger-menu-content");
})

function makeHamburgerMenu(hamburgerMenuSelector, hamburgerMenuBtnSelector, hamburgerMenuBtnSvgSelector,hamburgerMenuContentSelector ) {
    const hamburgerMenuElement = document.querySelector(hamburgerMenuSelector);
    const hamburgerMenuBtn = hamburgerMenuElement.querySelector(hamburgerMenuBtnSelector);
    const hamburgerMenuContent = hamburgerMenuElement.querySelector(hamburgerMenuContentSelector);
    const hamburgerMenuBtnSvgList = hamburgerMenuElement.querySelectorAll(hamburgerMenuBtnSvgSelector);
    const hamburgerMenuBtnSvgArray = Array.from(hamburgerMenuBtnSvgList);
    hamburgerMenuBtn.addEventListener("click", () => {
        toggleBtnSvg(hamburgerMenuBtnSvgArray);
        toggleContent(hamburgerMenuContent);
    })

    document.addEventListener("click", event => {
        if(!hamburgerMenuElement.contains(event.target) && !hamburgerMenuBtn.contains(event.target) && hamburgerMenuContent.classList.contains("d-block")) {
            toggleBtnSvg(hamburgerMenuBtnSvgArray);
            toggleContent(hamburgerMenuContent);
        }
    })
}

function toggleBtnSvg(hamburgerMenuBtnSvgArray) {
    hamburgerMenuBtnSvgArray.forEach(element => {
        element.classList.toggle("d-block-svg");
        element.classList.toggle("d-none-svg");
    })
}

function toggleContent(hamburgerMenuContent) {
    hamburgerMenuContent.classList.toggle("d-none");
    hamburgerMenuContent.classList.toggle("d-block");
}
