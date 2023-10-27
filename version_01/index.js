const qustions = [
  {
    question: "Which is the largest animal in the world",
    answers: [
      {text: "Shark", correct: false},
      {text: "Blue Whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: true}
    ]
  },
  {
    question: "What is the capital of india",
    answers: [
      {text: "Mumbai", correct: false},
      {text: "Kolkata", correct: false},
      {text: "Chennai", correct: false},
      {text: "Delhi", correct: true}
    ]
  },
  {
    question: "Which city is considered as the financial capital of india",
    answers: [
      {text: "Mumbai", correct: true},
      {text: "Kochi", correct: false},
      {text: "Bangalore", correct: false},
      {text: "Goa", correct: true}
    ]
  },
  {
    question: "Which state is also known as God's own country",
    answers: [
      {text: "Gujarat", correct: false},
      {text: "Oddisa", correct: false},
      {text: "Kerala", correct: true},
      {text: "Maharashtra", correct: false}
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");