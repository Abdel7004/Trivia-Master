// Define the welcome message
const welcomeMessage =
  "Welcome to the trivia game! Here are the instructions: <br><br>Answer the question and earn points! You will get a final score at the end. Good luck!";

gameWelcome.innerHTML = welcomeMessage;
// Display the welcome message to the player
console.log(welcomeMessage);

// Load questions and answers into an array of objects, each with a category property
const questions = [
  {
    category: "History",
    question: "What year did World War II end?",
    answers: ["1945", "1939", "1914", "1941"],
    correctAnswer: "1945",
  },

  {
    category: "Science",
    question: "What is the process by which plants make their own food?",
    answers: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
    correctAnswer: "Photosynthesis",
  },

  {
    category: "Sports",
    question: "Who holds the record for the most career points in NBA history?",
    answers: [
      "LeBron James",
      "Michael Jordan",
      "Kareem Abdul-Jabbar",
      "Kobe Bryant",
    ],
    correctAnswer: "LeBron James",
  },

  {
    category: "Arts & Literature",
    question: "Who wrote the novel 'To Kill a Mockingbird'?",
    answers: [
      "Harper Lee",
      "J.D. Salinger",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "Harper Lee",
  },
];

// Define the categories
const categories = ["History", "Science", "Sports", "Arts & Literature"];

const form = document.querySelector("#quizForm");
const questionArea = document.querySelector("#questionArea");
const resultArea = document.querySelector("#resultArea");
let currentQuestion = 0;
let numCorrect = 0;

function displayQuestion(question) {
  const { category, question: questionText, answers } = question;
  questionArea.innerHTML = `
                <div>
                    <h2>${category}</h2>
                    <p>${questionText}</p>
                </div>
                <div>
                    ${answers
                      .map(
                        (answer) => `
                        <label>
                            <input type="radio" name="answer" value="${answer}">${answer} </label>`
                      )
                      .join("")}
                </div>`;
}

function displayResults() {
  resultArea.innerHTML = `<p>You got ${numCorrect} out of ${questions.length} correct!</p>`;
}

function submitQuiz(evt) {
  evt.preventDefault();
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
      numCorrect++;
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
      displayResults();
    } else {
      displayQuestion(questions[currentQuestion]);
    }
  }
}

function resetQuiz() {
  currentQuestion = 0;
  numCorrect = 0;
  displayQuestion(questions[currentQuestion]);
  resultArea.innerHTML = "Choose your answer, and click the submit button";
}

form.addEventListener("submit", submitQuiz);

displayQuestion(questions[currentQuestion]);
