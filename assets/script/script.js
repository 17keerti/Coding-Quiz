var mainContainer = document.getElementById("mainContainer");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var startButton = document.querySelector("#startButton");
var questions = document.querySelector("#questions");
var timeLeft = document.querySelector("time_left");
var answerDisplay = document.querySelector("#answerDisplay");
var viewHighScore = document.querySelector("#viewHighScore");
var timerInterval;
var selectedQuestion;
var currentQuestionIndex = -1;
var timeLeft;



option1.addEventListener("click", function () {
  handleAnswerSelect(1);
});

option2.addEventListener("click", function () {
  handleAnswerSelect(2);
});

option3.addEventListener("click", function () {
  handleAnswerSelect(3);
});

option4.addEventListener("click", function () {
  handleAnswerSelect(4);
});

startButton.addEventListener("click", function () {
  selectedQuestion = -1;
  displayNextQuestion();
  startButton.style.display = 'none';
  timeLeft = 75;
  timeLeft.textContent = timeLeft;
  clearInterval(timerInterval);
  timerInterval = setInterval(function () {
    timeLeft--;
    time_left.textContent = "Time Left: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      complete();
    }
  }, 1000);
});



function handleAnswerSelect(optionIndex) {
  if (optionIndex === selectedQuestion.answer) {
    console.log("Answer is right");
    answerDisplay.textContent = "Right";
  } else {
    console.log("Wrong Answer");
    answerDisplay.textContent = "Wrong";
    timeLeft = timeLeft - 10;
  }
  if (currentQuestionIndex !== remainingQuestionBank.length - 1) {
    displayNextQuestion();
  } else {
    complete();
    clearInterval(timerInterval);
    console.log("Quiz over");
  }
}


var q1 = {
  question: "Commonly used data types DO NOT include:",
  answer: 3,
  option1: "1. Strings",
  option2: "2. Booleans",
  option3: "3. Alerts",
  option4: "4. Numbers"
}

var q2 = {
  question: " The condition in an if/else statement is enclosed within_____. ",
  answer: 3,
  option1: "1. Quotes",
  option2: "2. Curly brackets",
  option3: "3. Parenthesis",
  option4: "4. Square brackets"
}

var q3 = {
  question: "Arrays in javascript can be used to store",
  answer: 4,
  option1: "1. Numbers and Strings",
  option2: "2.Boolean",
  option3: "3.Other arrays",
  option4: "4.All of the above"
}

var q4 = {
  question: "String values must be stored within ____ when being assigned to variables. ",
  answer: 3,
  option1: "1. Commas",
  option2: "2. Curly brackets",
  option3: "3. Quotes",
  option4: "4. Parentheses"
}

var q5 = {
  question: "A very useful tool used during development amd debuggingfor printing cotent to the debugger is: ",
  option1: "1. Javascript",
  option2: "2. Terminal / Bash ",
  option3: "3. For loop",
  option4: "4. Console log"
}
var remainingQuestionBank = [q1, q2, q3, q4, q5];

function displayNextQuestion() {
  currentQuestionIndex++;
  selectedQuestion = remainingQuestionBank[currentQuestionIndex];
  questions.textContent = selectedQuestion.question;
  option1.textContent = selectedQuestion.option1;
  option2.textContent = selectedQuestion.option2;
  option3.textContent = selectedQuestion.option3;
  option4.textContent = selectedQuestion.option4;
}

function complete() {
  mainContainer.innerHTML = "";

  var heading = document.createElement("h1");
  heading.setAttribute("id", "heading");
  heading.textContent = "All done!";
  mainContainer.appendChild(heading);

  var para = document.createElement("p");
  para.setAttribute("id", "para");
  para.textContent = "Your final score is: " + timeLeft;
  mainContainer.appendChild(para);

  var label = document.createElement("label");
  label.setAttribute("id", "Label");
  label.textContent = "Enter your initials: ";
  mainContainer.appendChild(label);

  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "initials");
  input.textContent = "";
  mainContainer.appendChild(input);

  var submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit");
  submitButton.textContent = "Submit";
  mainContainer.appendChild(submitButton);

  submitButton.addEventListener("click", function () {
    var initialAnswer = document.getElementById("initials").value;
    var userScore = {
      initials: initialAnswer,
      score: timeLeft
    };
    var previousUserScores = JSON.parse(localStorage.getItem("userScores"));
    localStorage.setItem("userScore", JSON.stringify(userScore));
    if (previousUserScores == null) {
      previousUserScores = [];
    }
    previousUserScores.push(userScore);
    localStorage.setItem("userScores", JSON.stringify(previousUserScores));
    highScore();
  });
}



function highScore() {
  mainContainer.innerHTML = " ";

  var heading = document.createElement("h1");
  heading.setAttribute("id", "heading");
  heading.textContent = "High Score";
  mainContainer.appendChild(heading);

  var unorderedList = document.createElement("ul");
  unorderedList.setAttribute("id", "unorderedList");
  unorderedList.textContent = "List Of scores:"
  mainContainer.appendChild(unorderedList);

  var finalScore = JSON.parse(localStorage.getItem("userScores"));

  for (var i = 0; i < finalScore.length; i++) {
    console.log(finalScore[i]);
    var listitem = document.createElement('li');
    listitem.textContent = "Initials:  " + finalScore[i].initials + "  score: " + finalScore[i].score;
    unorderedList.appendChild(listitem);
  }

  var goBackButton = document.createElement("button");
  goBackButton.setAttribute("type", "submit");
  goBackButton.setAttribute("id", "goback");
  goBackButton.textContent = "Go Back";
  mainContainer.appendChild(goBackButton);

  goBackButton.addEventListener("click", function () {
    window.location.replace("./index.html");
  });
}

viewHighScore.addEventListener("click", function () {
  highScore();
})













