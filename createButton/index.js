const btn = document.querySelector(".btn");
const paragraph = document.createElement("p");

const showCurrentTime = () => {
        let div = document.querySelector(".some-div");
        paragraph.innerHTML = "";
        paragraph.className = "timeBox";
        let currentDate = new Date();
        paragraph.textContent = currentDate.toString().substring(4, 25);
        div.append(paragraph);
};

btn.addEventListener("click", showCurrentTime);

