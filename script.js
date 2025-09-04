const secretWord = "DISRUPTIVE";
let guessedLetters = [];
let wrongGuesses = [];

function updateWordDisplay() {
  let display = "";
  for (let c of secretWord) {
    display += guessedLetters.includes(c) ? c : "-";
  }
  document.getElementById("word").textContent = display;
  document.getElementById("wrong").textContent = wrongGuesses.join(", ");
}

function makeGuess(guess) {
  guess = guess.toUpperCase();
  if (!guess || guess.length !== 1 || guessedLetters.includes(guess) || wrongGuesses.includes(guess)) {
    document.getElementById("message").textContent = "Invalid guess.";
    return;
  }

  if (secretWord.includes(guess)) {
    guessedLetters.push(guess);
  } else {
    wrongGuesses.push(guess);
  }
  updateWordDisplay();

  if (!document.getElementById("word").textContent.includes('-')) {
    document.getElementById("message").textContent = "Congratulations!";
  } else {
    document.getElementById("message").textContent = "";
  }
}

document.getElementById("guessForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("guessInput");
  makeGuess(input.value);
  input.value = '';
  input.focus();
});

updateWordDisplay();
