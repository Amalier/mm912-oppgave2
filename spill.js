
 
 const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  let tries = 6;

  const randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

  const output = document.getElementById("outputtext");
  const button = document.getElementById("guessButton");

  button.addEventListener("click", updateButton);
  playAgainButton.addEventListener("click", resetPage)
  playAgainButton.disabled = true;


  function resetPage() {
    playAgainButton.disabled = false;
    window.location.reload();

  }

  function updateButton() {

    const guess = parseInt(document.getElementById("playerGuess").value);
    const li = document.createElement("li");

    if (isNaN(guess)) {
      li.innerHTML = "Please enter a valid number.";
    }

    else if (guess === randomNumber) {
      li.innerHTML = `You guessed ${guess}, Correct Guess <br/><h2><b>YOU WON, CONGRATS!!</h2></b><br/!`;
      button.disabled = true;
      playAgainButton.disabled = false;


    } else if (tries === 0) {
      li.innerHTML = "you have no more tries <br/><h2><b>game over</h2></b> <br/>"
      button.disabled = true;
      playAgainButton.disabled = false;

    } else if (guess < randomNumber) {
      li.innerHTML = ` you guessed ${guess}, Too low, remianing tries ${tries}`;
      tries --;
    } else {
      li.innerHTML = `you guessed ${guess}, Too high, remianing tries ${tries}`;
      tries --;
    }

    output.appendChild(li)

  }
