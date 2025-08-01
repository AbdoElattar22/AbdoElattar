let round = 1;
let totalRounds = 5;
let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  if (round > totalRounds) return;

  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  // تحديث الأيقونات
  document.getElementById("user-icon").textContent = getIcon(userChoice);
  document.getElementById("computer-icon").textContent = getIcon(computerChoice);

  if (userChoice == computerChoice) {
    result = `🤝 Draw! You both chose ${userChoice}`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    result = `🎉 You Win! ${userChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `😢 You Lose! ${computerChoice} beats ${userChoice}`;
  }

  document.getElementById("result").innerHTML = result;
  document.getElementById("score").innerHTML = `Round: ${round} / ${totalRounds}`;
  round++;

  if (round > totalRounds) {
    setTimeout(showFinalMessage, 800);
  }
}

function getIcon(choice) {
  if (choice === "rock") return "🪨";
  if (choice === "paper") return "📄";
  if (choice === "scissors") return "✂️";
}

function showFinalMessage() {
  const final = document.getElementById("final-message");
  const playAgainBtn = document.getElementById("play-again");

  if (userScore > computerScore) {
    final.innerHTML = "🏆 You WON the game!";
    document.getElementById("win-sound").play();
  } else if (userScore < computerScore) {
    final.innerHTML = "💀 You LOST the game!";
    document.getElementById("lose-sound").play();
  } else {
    final.innerHTML = "😐 It's a DRAW!";
    document.getElementById("draw-sound").play();
  }

  final.style.display = "block";
  playAgainBtn.style.display = "inline-block";
}

function resetGame() {
  round = 1;
  userScore = 0;
  computerScore = 0;
  document.getElementById("score").innerHTML = `Round: 1 / ${totalRounds}`;
  document.getElementById("result").innerHTML = "";
  document.getElementById("final-message").style.display = "none";
  document.getElementById("play-again").style.display = "none";
  document.getElementById("user-icon").textContent = "❓";
  document.getElementById("computer-icon").textContent = "❓";
}
