window.addEventListener("DOMContentLoaded", () => {
    const mainSlideL = new Swiper(".mainSlideL", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    const mainSlideR = new Swiper(".mainSlideR", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    mainSlideL.controller.control = mainSlideR;
    mainSlideR.controller.control = mainSlideL;

    const INCH01 = document.querySelectorAll(".mainTv .option01 div>a"); // [a1, a2, a3]
    const PRICE01 = document.querySelectorAll(".mainTv .txt01>p"); // [p1, p2, p3]
    INCH01.forEach((el, idx) => {
        el.addEventListener("click", () => {
            INCH01.forEach((el) => el.classList.remove("on")); // 다 떼라
            el.classList.add("on"); // 선택한 애 붙여라
            PRICE01.forEach((el) => el.classList.remove("on"));
            PRICE01[idx].classList.add("on");
        });
    });

    const INCH02 = document.querySelectorAll(".mainTv .option02 div>a");
    const PRICE02 = document.querySelectorAll(".mainTv .txt02>p");
    INCH02.forEach((el, idx) => {
        el.addEventListener("click", () => {
            INCH02.forEach((el) => el.classList.remove("on"));
            el.classList.add("on");
            PRICE02.forEach((el) => el.classList.remove("on"));
            PRICE02[idx].classList.add("on");
        });
    });
});
