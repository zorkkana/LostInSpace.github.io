// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get input element, result element, and hearts
let guessInput = document.getElementById("guessInput");
let result = document.getElementById("result");
let hearts = document.querySelectorAll(".heartimg");

// Initialize number of remaining guesses
let remainingGuesses = 5;

function checkGuess() {
  // Get user's guess
  let userGuess = parseInt(guessInput.value);

  // Check if user's guess matches the random number
  if (userGuess === randomNumber) {
    result.textContent = "Congratulations! You guessed the number.";
    result.style.color = "green";
    disableInputAndButton();
  } else {
    // Decrement number of remaining guesses
    remainingGuesses--;

    // Update hearts
    hearts[remainingGuesses].style.filter = "grayscale(100%)";


    if (remainingGuesses === 0) {
      // Game over
      result.textContent = "Game over. The number was " + randomNumber + ".";
      result.style.color = "red";
      disableInputAndButton();
    } else if (userGuess > randomNumber) {
      result.textContent = "Your guess is too high. Try again.";
      result.style.color = "red";
    } else {
      result.textContent = "Your guess is too low. Try again.";
      result.style.color = "red";
    }
  }
}

function disableInputAndButton() {
  guessInput.disabled = true;
  document.querySelector("button").disabled = true;
}


function resetGame() {
  // Reset variables
  randomNumber = Math.floor(Math.random() * 100) + 1;
  remainingGuesses = 5;

  // Reset hearts
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.filter = "none";
  }

  // Reset input, result, and button
  guessInput.disabled = false;
  guessInput.value = "";
  result.textContent = "";
  result.style.color = "black";
  document.querySelector("button").disabled = false;
}
