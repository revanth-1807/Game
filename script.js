// Select elements
const circle = document.getElementById("circle");
const scoreDisplay = document.getElementById("score");

let score = 0;

// Move the circle randomly
function moveCircle() {
    const gameArea = document.getElementById("gameArea");
    const areaWidth = gameArea.offsetWidth;
    const areaHeight = gameArea.offsetHeight;

    // Random position
    const x = Math.random() * (areaWidth - 50); // 50 is the width of the circle
    const y = Math.random() * (areaHeight - 50); // 50 is the height of the circle

    // Set new position
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

// Handle circle clicks
circle.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveCircle();
});

// Initial position
moveCircle();
