const answersBtn: NodeListOf<Element> =
  document.querySelectorAll(".box-answer");

answersBtn.forEach((answer) => {
  answer.addEventListener("click", () => {
    console.log(answer);
  });
});

const render = () => {
  const htmlDivElement: HTMLElement = document.createElement("div");
  htmlDivElement.classList.add("box-answer");
};
render();
