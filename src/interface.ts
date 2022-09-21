interface Answer {
  text: string;
  correct: boolean;
}

interface Quiz {
  question: string;
  answer: Answer[];
}

export default Quiz;
