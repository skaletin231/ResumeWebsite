const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function OpenSlide(index)
{
    slides[currentSlide].classList.remove("active");
    currentSlide = index;
    slides[currentSlide].classList.add("active");
}

document.querySelector(".right").onclick = () => {
    let nextPage = (currentSlide + 1) % slides.length;
    OpenSlide(nextPage);
};

document.querySelector(".left").onclick = () => {
    let nextPage = currentSlide - 1;
    if (nextPage < 0)
    {
        nextPage = slides.length-1;
    }
    OpenSlide(nextPage);
};