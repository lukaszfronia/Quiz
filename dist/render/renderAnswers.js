import { quizData } from "../data.js";
export const currentAnswer = (currentQuestion, i) => {
    const answerBoxDescription = document.querySelector(`.answer-${i + 1}`);
    answerBoxDescription.textContent = quizData[currentQuestion].answer[i].text;
};
export const renderAnswers = (currentQuestion) => {
    for (let i = 0; i < quizData[currentQuestion].answer.length; i++) {
        currentAnswer(currentQuestion, i);
    }
};
