const btn = document.querySelector(".button-to-main");
const dataArr = document.querySelectorAll(".data");

const state = {};
dataArr.forEach((input) => {
    input.addEventListener("input", (event) => {
        state[event.target.name] = event.target.value;
    });
});

btn.addEventListener("click", (event) => {
    event.preventDefault();

    console.log("state", state);

    let json = JSON.stringify(state);
    alert(json);
});
