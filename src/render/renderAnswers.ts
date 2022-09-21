import { quizData } from "../data.js";
export const currentAnswer = (currentQuestion: number, i: number) => {
  const answerBoxDescription: HTMLElement = document.querySelector(
    `.answer-${i + 1}`
  );
  answerBoxDescription.textContent = quizData[currentQuestion].answer[i].text;
};

export const renderAnswers = (currentQuestion: number) => {
  for (let i = 0; i < quizData[currentQuestion].answer.length; i++) {
    currentAnswer(currentQuestion, i);
  }
};
