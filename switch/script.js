document.addEventListener("DOMContentLoaded", () => {
    makeSwitch(".switch", ".switch-box", ".switch-toggler", ".switch-toggler__area");

    function makeSwitch(switchSelector, switchBoxSelector, switchTogglerSelector, switchTogglerAreaSelector) {
        const switchElement = document.querySelector(switchSelector);
        const switchBox = switchElement.querySelector(switchBoxSelector);
        const switchToggler = switchElement.querySelector(switchTogglerSelector);
        const switchTogglerArea = switchElement.querySelector(switchTogglerAreaSelector);
        switchElement.addEventListener("click", () => {
            toggleSwitchElement(switchBox, switchToggler, switchTogglerArea);
        })
    }
    
    function toggleSwitchElement(switchBox, switchToggler, switchTogglerArea) {
        switchBox.classList.toggle("switch-on-box");
        switchBox.classList.toggle("switch-off-box");
        switchToggler.classList.toggle("switch-on-toggler");
        switchToggler.classList.toggle("switch-off-toggler");
        switchTogglerArea.classList.toggle("switch-on-toggler-area");
        switchTogglerArea.classList.toggle("switch-off-toggler-area");
    }
})