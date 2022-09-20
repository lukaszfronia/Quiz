const answersBtn = document.querySelectorAll(".box-answer");
answersBtn.forEach((answer) => {
    answer.addEventListener("click", () => {
        console.log(answer);
    });
});
const render = () => {
    const htmlDivElement = document.createElement("div");
    htmlDivElement.classList.add("box-answer");
};
render();
