const faqBtns = document.querySelectorAll(".faq-toggle");

faqBtns.forEach(button => {
    button.addEventListener("click", ()=> {
        button.parentNode.classList.toggle("active")
    })
})