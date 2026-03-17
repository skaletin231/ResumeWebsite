const gameContent = document.querySelectorAll(".game");
const contentButtons = document.querySelectorAll(".content-button");
let currentContent = 0;

gameContent.forEach(game => {
    const diamonds = game.querySelectorAll(".diamond");
    const media = game.querySelectorAll("video");
    const description = game.querySelectorAll(".description");

    // media.forEach(frame => {
    //     frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");
    // });

    let currentSlide = 0;

    diamonds.forEach((button, index) => {
        button.addEventListener('click', () => {
            OpenSlide(index);
        });
    });

    function OpenSlide(index)
    {
        media[currentSlide].classList.remove("active");
        description[currentSlide].classList.remove("active");
        diamonds[currentSlide].classList.remove("active");

        //media[currentSlide].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");

        currentSlide = index;

        media[currentSlide].classList.add("active");
        description[currentSlide].classList.add("active");
        diamonds[currentSlide].classList.add("active");

       //media[currentSlide].contentWindow.postMessage('{"event":"command","func":"seekTo","args":[0,true]}',"*");
       //media[currentSlide].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");
    }

    function GoRight()
    {
        let nextPage = (currentSlide + 1) % media.length;
        OpenSlide(nextPage);
    }

    function GoLeft()
    {
        let nextPage = currentSlide - 1;
        if (nextPage < 0)
        {
            nextPage = media.length-1;
        }
        OpenSlide(nextPage);
    }

    game.querySelector(".right").addEventListener("click", GoRight)

    game.querySelector(".left").addEventListener("click", GoLeft)
})


contentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contentButtons[currentContent].classList.remove("active");
        gameContent[currentContent].classList.remove("active");

        currentContent = index;
        contentButtons[currentContent].classList.add("active");
        gameContent[currentContent].classList.add("active");
    });
});
