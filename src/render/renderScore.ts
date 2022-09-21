import Quiz from "../interface";
import { TIME_FOR_RELOAD_SEC } from "../config.js";
const questionElement = document.querySelector(".box-question-title");
const answerBoxElement = document.querySelector(".quiz-box-answers");

export const renderScore = (score: number, quizData: Quiz[]) => {
  answerBoxElement.innerHTML = "";
  questionElement.innerHTML = "Result:";

  const scoreElement: HTMLElement = document.createElement("p");
  scoreElement.classList.add("score");
  scoreElement.innerText = `You answered ${score}/${quizData.length} questions correctly!`;

  answerBoxElement.appendChild(scoreElement);

  setTimeout(() => location.reload(), TIME_FOR_RELOAD_SEC * 1000);
};
