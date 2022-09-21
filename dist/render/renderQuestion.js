import { quizData } from "../data.js";
const boxTitleElement = document.querySelector(".box-question-title");
export const renderQuestion = (currentQuestion) => (boxTitleElement.innerHTML = quizData[currentQuestion].question);
