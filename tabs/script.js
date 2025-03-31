document.addEventListener("DOMContentLoaded", () => {
    makeTabs(".js-tabs", ".js-tabs-btn__element", ".js-tabs-btn-underline", ".js-tabs-content__element");
})

function makeTabs(tabsSelector, tabsBtnSelector, tabsBtnUnderlineSelector, tabsContentElementSelector) {
    const tabsElement = document.querySelector(tabsSelector);
    const tabsBtnList = tabsElement.querySelectorAll(tabsBtnSelector);
    const tabsBtnUnderline = tabsElement.querySelector(tabsBtnUnderlineSelector);
    const tabsContentElementList = tabsElement.querySelectorAll(tabsContentElementSelector);
    const tabsContentElementArray = Array.from(tabsContentElementList);
    const tabsBtnArray = Array.from(tabsBtnList);
    tabsBtnArray.forEach((btnElement, btnIndex) => {
        btnElement.addEventListener("click", () => {
            toggleTabsBtnElement(tabsBtnArray, btnElement, btnIndex, tabsBtnUnderline);
            toggleTabsContentElement(tabsContentElementArray, btnIndex);
        })
    })
}

function toggleTabsBtnElement(tabsBtnArray, tabsBtn, indexOfBtn, tabsBtnUnderline) {
    tabsBtn.classList.add("focused");
    tabsBtn.classList.remove("unfocused");
    tabsBtnArray.forEach((innerElement, innerIndex) => {
        if(innerIndex != indexOfBtn) {
            innerElement.classList.add("unfocused");
            innerElement.classList.remove("focused");
        }
    })
    tabsBtnUnderline.style.left = `${indexOfBtn*124}px`; //!
}

function toggleTabsContentElement(tabsContentElementArray, indexOfBtnElement) {
    tabsContentElementArray[indexOfBtnElement].classList.add("d-block");
    tabsContentElementArray[indexOfBtnElement].classList.remove("d-none");
    tabsContentElementArray.forEach((innerElement, innerIndex) => {
        const is = innerIndex != indexOfBtnElement //!
        if(is) {
            innerElement.classList.add("d-none");
            innerElement.classList.remove("d-block");
        }
    })
}
