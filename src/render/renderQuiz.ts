import { currentAnswer } from "./renderAnswers.js";
import { renderQuestion } from "./renderQuestion.js";

export const renderQuiz = (
  currentQuestion: number,
  answer: HTMLElement,
  i: number
) => {
  renderQuestion(currentQuestion);

  const pElement: HTMLElement = document.createElement("p");
  pElement.classList.add("answer-description");
  pElement.classList.add(`answer-${i + 1}`);
  answer.appendChild(pElement);

  currentAnswer(currentQuestion, i);
};
