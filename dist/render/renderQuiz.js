import { currentAnswer } from "./renderAnswers.js";
import { renderQuestion } from "./renderQuestion.js";
export const renderQuiz = (currentQuestion, answer, i) => {
    renderQuestion(currentQuestion);
    const pElement = document.createElement("p");
    pElement.classList.add("answer-description");
    pElement.classList.add(`answer-${i + 1}`);
    answer.appendChild(pElement);
    currentAnswer(currentQuestion, i);
};
