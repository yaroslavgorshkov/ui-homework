document.addEventListener("DOMContentLoaded", () => {
    makeAccordion ({
        accordion: ".accordion .js-accordion-element", 
        accordionBtn: ".js-accordion__btn", 
        accordionContent: ".js-accordion__element-content", 
        accordionBtnSvg: ".js-accordion__btn-svg-container"});
})

function makeAccordion ({
    accordion: accordionSelector, 
    accordionBtn: accordionBtnSelector, 
    accordionContent: accordionContentSelector, 
    accordionBtnSvg: accordionBtnSvgContainerSelector}) {
        const accordionList = document.querySelectorAll(accordionSelector);
        const accordionListArray = Array.from(accordionList);
        accordionListArray.forEach((element, index) => {
            const accordionBtn = element.querySelector(accordionBtnSelector);
            const accordionElementContent = element.querySelector(accordionContentSelector);
            const accordionSvg = element.querySelector(accordionBtnSvgContainerSelector);
            accordionBtn.addEventListener("click", () => {
                toggleAccordion(
                    accordionListArray,
                    accordionElementContent,
                    accordionSvg,
                    index,
                    accordionContentSelector,
                    accordionBtnSvgContainerSelector);
            })
        })
}

function toggleAccordion(
    accordionListArray,
    accordionElementContent,
    accordionSvg,
    index,
    accordionContentSelector,
    accordionBtnSvgSelector) {
    const i = index;
    accordionListArray.forEach((innerElement, innerIndex) => {
        const accordionElementContent = innerElement.querySelector(accordionContentSelector);
        const accordionSvg = innerElement.querySelector(accordionBtnSvgSelector);
        if(index !== innerIndex) {
            closeOtherAccordions(accordionElementContent, accordionSvg);
        }
    })
    toggleCurrentAccordion(accordionElementContent, accordionSvg);
}

function closeOtherAccordions(accordionElementContent, accordionSvg) {
    accordionElementContent.classList.remove("d-block");
    accordionElementContent.classList.add("d-none");
    accordionSvg.classList.remove("rotated");
    accordionSvg.classList.add("non-rotated");
}

function toggleCurrentAccordion(accordionElementContent, accordionSvg) {
    accordionElementContent.classList.toggle("d-block");
    accordionElementContent.classList.toggle("d-none");
    accordionSvg.classList.toggle("rotated");
    accordionSvg.classList.toggle("non-rotated");
}
