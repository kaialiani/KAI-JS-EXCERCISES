// Get the container element
const numberList = document.getElementById("number-list");

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  // Create a new div element for each number
  const numberDiv = document.createElement("div");
  numberDiv.textContent = i;
  numberDiv.classList.add("number");

  // Check if the number is even or odd and apply the appropriate class
  if (i % 2 === 0) {
    numberDiv.classList.add("even");
  } else {
    numberDiv.classList.add("odd");
  }

  // Add an event listener to highlight the number when clicked
  numberDiv.addEventListener("click", function () {
    // Remove highlight from all numbers
    const allNumbers = document.querySelectorAll(".number");
    allNumbers.forEach((num) => num.classList.remove("highlight"));

    // Add highlight to the clicked number
    numberDiv.classList.add("highlight");
  });

  // Append the new div to the container
  numberList.appendChild(numberDiv);
}

// Function to start the guessing game
function startGame() {
  // Randomly select a number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let guessCount = 0;
  let guessedCorrectly = false;

  while (!guessedCorrectly) {
    // Ask the user for a guess
    let userGuess = prompt("Enter your guess (between 1 and 100):");

    // Check if the input is valid
    if (userGuess === null) {
      alert("Game canceled.");
      break;
    }

    userGuess = Number(userGuess);
    guessCount++;

    // Check if the guess is valid (a number between 1 and 100)
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      continue;
    }

    // Check if the guess is higher, lower, or correct
    if (userGuess > randomNumber) {
      alert("Your guess is too high. Try again.");
    } else if (userGuess < randomNumber) {
      alert("Your guess is too low. Try again.");
    } else {
      guessedCorrectly = true;
      alert(
        `Congratulations! You guessed the correct number (${randomNumber}). It took you ${guessCount} guesses.`
      );
    }
  }
}

// Add event listener to start the game when the button is clicked
document.getElementById("start-game").addEventListener("click", startGame);

//not gonna lie, I had some fun with chatgpt in the guess the number excercise, but I couldn't figure it out and actually learned quite a few things, so I didn't wanna delete it :)
