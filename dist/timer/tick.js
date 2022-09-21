import { renderAnswers } from "../render/renderAnswers.js";
import { renderQuestion } from "../render/renderQuestion.js";
import { renderScore } from "../render/renderScore.js";
import { TIME_SEC, COUNTDOWN_TIME_SEC } from "../config.js";
const labelTimer = document.querySelector(".timer");
export const tick = (time, timer, score, quizData, currentQuestion) => {
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
