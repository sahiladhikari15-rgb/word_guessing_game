const secretWord = "DISRUPTIVE";
let guessedLetters = [];
let wrongGuesses = [];

function updateWordDisplay() {
  let display = "";
  for (let c of secretWord) {
    if (guessedLetters.includes(c)) display += c;
    else display += "-";
  }
  document.getElementById("word").textContent = display;
  document.getElementById("wrong").textContent = wrongGuesses.join(", ");
}

function makeGuess() {
  const input = document.getElementById("guessInput");
  const guess = input.value.toUpperCase();
  input.value = '';

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
updateWordDisplay();
