document.addEventListener("DOMContentLoaded", () => {
    createPopover(".js-popover", ".js-popover-btn", ".js-popover-content-wrapper");
})

function createPopover(popoverSelector, popoverBtnSelector, popoverContentWrapperSelector) {
    const popover = document.querySelector(popoverSelector);
    const popoverBtn = popover.querySelector(popoverBtnSelector);
    const popoverContentWrapper = popover.querySelector(popoverContentWrapperSelector);
    popoverBtn.addEventListener("click", () => {
        setPopoverContentPosition(popoverBtn, popoverContentWrapper);
        togglePopover(popoverContentWrapper);
    })

    document.addEventListener("click", event => {
        if(popoverContentWrapper.classList.contains("d-block") && !popoverContentWrapper.contains(event.target) && !popoverBtn.contains(event.target)) {
            togglePopover(popoverContentWrapper);
        }
    })
}

function togglePopover(popoverContentWrapper) {
    popoverContentWrapper.classList.toggle("d-none");
    popoverContentWrapper.classList.toggle("d-block");
}

function setPopoverContentPosition(popoverBtn, popoverContentWrapper) {
    const btnWidth = popoverBtn.offsetWidth;
    const btnComputedStyle = window.getComputedStyle(popoverBtn);
    const btnPaddingValue = parseInt(btnComputedStyle.padding);
    
    popoverContentWrapper.style.minWidth = `${(btnWidth - btnPaddingValue*2) * 0.8}px`;
    popoverContentWrapper.style.maxWIdth = `${btnWidth - btnPaddingValue*2}px`;
}
