document.addEventListener("DOMContentLoaded", () => {
    createPopover(".popover", ".popover-btn", ".popover-content-wrapper");

    function createPopover(popoverSelector, popoverBtnSelector, popoverContentWrapperSelector) {
        const popover = document.querySelector(popoverSelector);
        const popoverBtn = popover.querySelector(popoverBtnSelector);
        const popoverContentWrapper = popover.querySelector(popoverContentWrapperSelector);
        popoverBtn.addEventListener("click", () => {
            togglePopover(popoverContentWrapper);
        })
    }

    function togglePopover(popoverContentWrapper) {
        popoverContentWrapper.classList.toggle("d-none");
        popoverContentWrapper.classList.toggle("d-block");
    }
})