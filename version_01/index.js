const questions = [
  {
    question: "Which is the largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "What is the capital of india",
    answers: [
      { text: "Mumbai", correct: false },
      { text: "Kolkata", correct: false },
      { text: "Chennai", correct: false },
      { text: "Delhi", correct: true }
    ]
  },
  {
    question: "Which city is considered as the financial capital of india",
    answers: [
      { text: "Mumbai", correct: true },
      { text: "Kochi", correct: false },
      { text: "Bangalore", correct: false },
      { text: "Goa", correct: true }
    ]
  },
  {
    question: "Which state is also known as God's own country",
    answers: [
      { text: "Gujarat", correct: false },
      { text: "Oddisa", correct: false },
      { text: "Kerala", correct: true },
      { text: "Maharashtra", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next"
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

window.addEventListener("DOMContentLoaded", startQuiz());