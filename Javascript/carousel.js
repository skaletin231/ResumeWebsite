const gameContent = document.querySelectorAll(".game");
const contentButtons = document.querySelectorAll(".content-button");
let currentContent = 0;

gameContent.forEach(game => {
    const slides = game.querySelectorAll(".slide");
    const dots = game.querySelectorAll(".dot");

    let currentSlide = 0;

    function OpenSlide(index)
    {
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");

        currentSlide = index;
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    game.querySelector(".right").onclick = () => {
        let nextPage = (currentSlide + 1) % slides.length;
        OpenSlide(nextPage);
    };

    game.querySelector(".left").onclick = () => {
        let nextPage = currentSlide - 1;
        if (nextPage < 0)
        {
            nextPage = slides.length-1;
        }
        OpenSlide(nextPage);
    };    
})


contentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log("clicked");
        contentButtons[currentContent].classList.remove("active");
        gameContent[currentContent].classList.remove("active");

        currentContent = index;
        contentButtons[currentContent].classList.add("active");
        gameContent[currentContent].classList.add("active");
    });
});
