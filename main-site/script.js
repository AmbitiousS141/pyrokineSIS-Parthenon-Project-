const startBtn = document.getElementById("startBtn");
const puzzleSection = document.getElementById("puzzleSection");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");
const feedback = document.getElementById("feedback");
const nextClue = document.getElementById("nextClue");

const correctAnswer = "my sisters are the best";

startBtn.addEventListener("click", () => {
    puzzleSection.classList.remove("hidden");
    startBtn.style.display = "none";
});

submitAnswer.addEventListener("click", () => {
    const user = answerInput.value.toLowerCase().trim();

    if (user === correctAnswer) {
        feedback.style.color = "#00ff88";
        feedback.textContent = "Correct!! You are the best!  🎉";
        nextClue.classList.remove("hidden");
    } else {
        feedback.style.color = "#ff4d4d";
        feedback.textContent = "Try again!";
    }
});