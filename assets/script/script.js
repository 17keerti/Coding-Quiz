
var formContainer = document.querySelector("#formContainer");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var startButton = document.querySelector("#startButton");
var questions = document.querySelector("#questions");
var timeLeft = document.querySelector("time_left");
var timerInterval;
var selectedQuestion;
var currentQuestionIndex = -1;



option1.addEventListener("click", function () {
  handleAnswerSelect(0)
});

option2.addEventListener("click", function () {
  handleAnswerSelect("option2")
});

option3.addEventListener("click", function () {
  handleAnswerSelect(option3.textContent)
});

option4.addEventListener("click", function () {
  handleAnswerSelect("option4")
});

startButton.addEventListener("click", function () {
  displayQuestion();
  var timeLeft = 30;
  timeLeft.textContent = timeLeft;
  clearInterval(timerInterval);
  timerInterval = setInterval(function () {
    timeLeft--;
    time_left.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  },1000);
});

function handleAnswerSelect(optionIndex) {
  console.log("Button was clicked " + optionIndex);
}


// Data model way1
var q1 = {
  question: "Commonly used data types DO NOT include:",
  answer: "3",
  option1: "1. Strings",
  option2: "2. Booleans",
  option3: "3. Alerts",
  option4: "4. Numbers"
}

var q2 = {
  question: " The condition in an if/else statement is enclosed within_____. ",
  answer: "3",
  option1: "1. Quotes",
  option2: "2. Curly brackets",
  option3: "3. Parenthesis",
  option4: "4. Square brackets"
}

var q3 = {
  question: "Arrays in javascript can be used to store",
  answer: "4",
  option1: "1. Numbers and Strings",
  option2: "2.Boolean",
  option3: "3.Other arrays",
  option4: "4.All of the above"
}

var remainingQuestionBank = [q1, q2, q3];

function displayQuestion() {
  currentQuestionIndex++;
  selectedQuestion = remainingQuestionBank[currentQuestionIndex];
  questions.textContent = selectedQuestion.question;
  option1.textContent = selectedQuestion.option1;
  option2.textContent = selectedQuestion.option2;
  option3.textContent = selectedQuestion.option3;
  option4.textContent = selectedQuestion.option4;
}
