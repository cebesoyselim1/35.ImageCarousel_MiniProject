const sliderContainer = document.querySelector(".slider-container");
const slideCount = document.querySelectorAll(".slide").length;
const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");

let currentIndex = 1;

next.addEventListener("click", (e) => {
    currentIndex++;
    if(currentIndex == slideCount){
        currentIndex = 0;
    }
    sliderContainer.style.transform = `translateY(${-300 * currentIndex}px)`;
})

prev.addEventListener("click", (e) => {
    currentIndex--;
    if(currentIndex == -1){
        currentIndex = slideCount - 1;
    }
    sliderContainer.style.transform = `translateY(${-300 * currentIndex}px)`;
})