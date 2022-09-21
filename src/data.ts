import Quiz from "./interface";

export const quizData: Quiz[] = [
  {
    question: "Inside which HTML element do we put the JavaScript?",

    answer: [
      {
        text: "A: <script>",
        correct: true,
      },
      {
        text: "B: <javascript>",
        correct: false,
      },
      {
        text: "C: <source>",
        correct: false,
      },
      {
        text: "D: <src>",
        correct: false,
      },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",

    answer: [
      {
        text: "A: alertBox('Hello World!')",
        correct: false,
      },
      {
        text: "B: msgBox('Hello World!')",
        correct: false,
      },
      {
        text: "C: alert('Hello World!')",
        correct: true,
      },
      {
        text: "D: msg('Hello World!')",
        correct: false,
      },
    ],
  },
  {
    question: "How to write an IF statment in JavaScript?",

    answer: [
      {
        text: "A: if (i = 5)",
        correct: false,
      },
      {
        text: "B: if i === 5",
        correct: false,
      },
      {
        text: "C: if i = 5",
        correct: false,
      },
      {
        text: "D: if (i === 5)",
        correct: true,
      },
    ],
  },
  {
    question: "What is the correct way to write a JavaScript array?",

    answer: [
      {
        text: "A: const arr = {'one','two','three'}",
        correct: false,
      },
      {
        text: "B: const arr = ['one','two','three']",
        correct: true,
      },
      {
        text: "C: const arr = ('one','two','three'",
        correct: false,
      },
      {
        text: "D: const arr = [1:'one',2:'two',3:'three']",
        correct: false,
      },
    ],
  },
  {
    question: "Which array method modifies the current array?",

    answer: [
      {
        text: "A: filter()",
        correct: false,
      },
      {
        text: "B: map()",
        correct: false,
      },
      {
        text: "C: slice()",
        correct: false,
      },
      {
        text: "D: fill()",
        correct: true,
      },
    ],
  },
  {
    question:
      "What the array will look like if we use the splice method on it? (arr.splice(2), arr = [a,b,c,d,e]?",

    answer: [
      {
        text: "A: arr = [a,b]",
        correct: true,
      },
      {
        text: "B: arr = [a,b,c]",
        correct: false,
      },
      {
        text: "C: arr = [c,d,e]",
        correct: false,
      },
      {
        text: "D: arr = [c]",
        correct: false,
      },
    ],
  },
];
