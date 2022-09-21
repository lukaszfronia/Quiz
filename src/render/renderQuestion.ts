import { quizData } from "../data.js";
const boxTitleElement: HTMLElement = document.querySelector(
  ".box-question-title"
);

export const renderQuestion = (currentQuestion: number) =>
  (boxTitleElement.innerHTML = quizData[currentQuestion].question);
