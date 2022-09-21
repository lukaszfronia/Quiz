//Imports
import { TIME_SEC, COUNTDOWN_TIME_SEC } from "./config.js";
import { quizData } from "./data.js";
import { renderQuestion } from "./render/renderQuestion.js";
import { renderAnswers } from "./render/renderAnswers.js";
import { renderQuiz } from "./render/renderQuiz.js";
import { renderScore } from "./render/renderScore.js";
//Variable
const answersBtn = document.querySelectorAll(".box-answer");
const labelTimer = document.querySelector(".timer");
let currentQuestion = 0;
let score = 0;
let timer;
let time = TIME_SEC;
// Functions
const tick = () => {
    const min = `${Math.trunc(time / 60)}`.padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
        clearInterval(timer);
        time = TIME_SEC;
        timer = setInterval(tick, COUNTDOWN_TIME_SEC * 1000);
        if (currentQuestion + 1 < quizData.length) {
            currentQuestion++;
            renderQuestion(currentQuestion);
            renderAnswers(currentQuestion);
        }
        else {
            renderScore(score, quizData);
        }
    }
    time--;
};
const startQuiz = () => {
    tick();
    timer = setInterval(tick, COUNTDOWN_TIME_SEC * 1000);
    answersBtn.forEach((answer, i) => {
        renderQuiz(currentQuestion, answer, i);
        answer.addEventListener("click", () => {
            time = TIME_SEC;
            if (timer)
                clearInterval(timer);
            timer = setInterval(tick, COUNTDOWN_TIME_SEC * 1000);
            if (quizData[currentQuestion].answer[i].correct === true)
                score++;
            if (currentQuestion + 1 < quizData.length) {
                currentQuestion++;
                renderQuestion(currentQuestion);
                renderAnswers(currentQuestion);
            }
            else {
                renderScore(score, quizData);
            }
        });
    });
};
startQuiz();
