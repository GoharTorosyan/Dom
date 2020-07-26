const list = document.querySelectorAll("li");

const hoverFn = (event) => {
    event.target.className = "list-item";
};

const clickFn = (item, index) => {
    console.log(index);
    if (index === 0) {
        item.style.textDecoration = "line-through";
    } else if (list[index - 1].style.textDecoration && index > 0) {
        item.style.textDecoration = "line-through";
    }
};

const mouseEventsFn = () => {
    list.forEach((item, index) => {
        item.addEventListener("mouseover", hoverFn);
        item.addEventListener("click", clickFn.bind(null, item, index));
        console.log(index);
    });
};

mouseEventsFn();

