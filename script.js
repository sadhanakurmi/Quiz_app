const questions = [
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Ganges", "Yangtze"],
        answer: "Nile"
    },
    {
        question: "who developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "which is the faster land animal?",
        options: ["Lion", "Cheetah", "Horse", "Kangaroo"],
        answer: "Cheetah"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const submitQuizButton = document.getElementById("submit-quiz-btn");
const resultContainer = document.getElementById("result");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option", "fade-in");
        button.onclick = () => selectAnswer(button, currentQuestion.answer);
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = "none";
}

function selectAnswer(button, correctAnswer) {
    const selectedAnswer = button.textContent;
    
    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
        score++;  // Increase score if correct
    } else {
        button.classList.add("wrong");
    }

    Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        nextButton.style.display = "none";
        submitQuizButton.style.display = "block";
    }
});

submitQuizButton.addEventListener("click", () => {
    console.log("Submit Button Clicked");
    console.log("Final Score:",score);
    resultContainer.textContent = `You scored ${score} out of  ${questions.length}!`;
    console.log("Updateed Result Text:",resultContainer.textContent);
    resultContainer.style.display = "block";
    console.log("Result Display Style:",resultContainer.style.display);
    submitQuizButton.style.display = "none";
});

showQuestion();