import { tick } from "./timer/tick";
import { renderAnswers } from "./render/renderAnswers";
import { renderQuestion } from "./render/renderQuestion";
import { renderScore } from "./render/renderScore";
const startQuiz = () => {
    tick(score, quizData, currentQuestion, timer);
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
