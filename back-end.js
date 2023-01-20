const FirstPage = document.getElementById("page-1");
const SecondPage = document.getElementById("page-2");
const LastPage = document.getElementById("page-3");
const BtnNext = document.getElementById("mybutton");
const SecondButton = document.getElementById("mega-btn");
const FinalButton = document.getElementById("final-btn");
const MyFinalButton = document.getElementById("final-btn-submit");

BtnNext.addEventListener("click", () => {
    FirstPage.classList.add("hide");
    SecondPage.classList.remove("hide");
})
SecondButton.addEventListener("click", () => {
    SecondButton.classList.add("hide");
    FinalButton.classList.remove("hide");
})
FinalButton.addEventListener("click", () => {
    FirstPage.classList.add("hide");
    SecondPage.classList.add("hide");
    LastPage.classList.remove("hide");
})

