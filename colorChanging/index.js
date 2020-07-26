const changeColorText = document.querySelector(".some-input");
const changeBackColor = document.querySelector(".another-input");
const textArr = document.querySelectorAll(".some-text");
const btn = document.querySelector(".btn");

const validateHexColor = (hex) => {
    if (
        typeof hex === "string" &&
        hex.substring(0, 1) === "#" &&
        hex.length === 7
    ) {
        hex = hex.substring(1);
        let parsedNum = parseInt(hex, 16);
        return !Number.isNaN(parsedNum);
    }
    return false;
};

changeColorText.addEventListener("input", (event) => {
    if (!validateHexColor(event.target.value)) {
        throw new Error("Value must be a hexademical code!");
    }
});

changeBackColor.addEventListener("input", (event) => {
    if (!validateHexColor(event.target.value)) {
        throw new Error("Value must be a hexademical code!");
    }
});

btn.addEventListener("click", (event) => {
    event.preventDefault(event);
    textArr.forEach((item) => {
        item.style.color = changeColorText.value;
        item.style.backgroundColor = changeBackColor.value;
    });
});

