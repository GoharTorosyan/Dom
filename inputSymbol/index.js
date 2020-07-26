const inputText = document.querySelector(".some-input");
const body = document.querySelector("body");
const p = document.createElement("p");

inputText.addEventListener("input", () => {
    p.textContent = inputText.value;
});
body.append(p);
