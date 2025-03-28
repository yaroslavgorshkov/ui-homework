document.addEventListener("DOMContentLoaded", () => {
    makeDialog(".dialog", ".dialog-btn", ".dialog-content", ".dialog-content-background", ".dialog-content__btn");

    function makeDialog(dialogSelector, dialogBtnSelector, dialogContentSelector, dialogContentBgSelector, dialogContentBtnSelector ) {
        const dialogElement = document.querySelector(dialogSelector);
        const dialogBtn = dialogElement.querySelector(dialogBtnSelector);
        const dialogContent = dialogElement.querySelector(dialogContentSelector);        
        dialogBtn.addEventListener("click", () => {
            switchOnDialogContent(dialogContent);
        })

        const dialogContentBg = dialogElement.querySelector(dialogContentBgSelector);
        dialogContentBg.addEventListener("click", () => {
            switchOffDialogContent(dialogContent);
        })

        const dialogContentBtnList = dialogElement.querySelectorAll(dialogContentBtnSelector);
        const dialogContentBtnArray = Array.from(dialogContentBtnList);
        dialogContentBtnArray.forEach(element => (
            element.addEventListener("click", () => {
                switchOffDialogContent(dialogContent);
            })
        ))
    }

    function switchOnDialogContent (dialogContent) {
        document.body.style.overflow = "hidden";
        dialogContent.classList.remove("d-none");
        dialogContent.classList.add("d-flex");
    }

    function switchOffDialogContent(dialogContent) {
        document.body.style.overflow = "auto";
        dialogContent.classList.add("d-none");
        dialogContent.classList.remove("d-flex");
    }
})