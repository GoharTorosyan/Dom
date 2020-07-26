const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide-item");

let n = 0;
function createSlide(n) {
    slides.forEach((elem) => {
        elem.classList.remove("active");
        elem.classList.add("hidden");
    });
    slides[n].classList.replace("hidden", "active");
}

createSlide(n);

next.addEventListener(
    "click",
    (fnNext = () => {
        if (n === slides.length - 1) {
            n = 0;
            createSlide(0);
        } else {
            createSlide((n += 1));
        }
    })
);

prev.addEventListener(
    "click",
    (fnPrev = () => {
        if (n === 0) {
            n = 2;
            createSlide(2);
        } else {
            createSlide((n -= 1));
        }
    })
);

let id = setInterval(fnNext, 2000);

setTimeout(() => {
    clearInterval(id);
}, 7000);




