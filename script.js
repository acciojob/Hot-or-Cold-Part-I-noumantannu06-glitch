 const guessInput = document.getElementById("guess");
    const checkBtn = document.getElementById("check");
    const response = document.getElementById("response");

    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let firstGuess = null;

    response.textContent = "";

    checkBtn.addEventListener("click", () => {
      const guess = Number(guessInput.value);
      if (!guessInput.value) return;

      if (firstGuess === null) {
        firstGuess = guess;

        if (guess < secretNumber) {
          response.textContent = "guess higher";
        } else if (guess > secretNumber) {
          response.textContent = "guess lower";
        } else {
          response.textContent = "Correct!";
        }
        return;
      }

      const prevDiff = Math.abs(secretNumber - firstGuess);
      const currentDiff = Math.abs(secretNumber - guess);

      if (currentDiff < prevDiff) {
        response.textContent =
          guess < secretNumber
            ? "Getting hotter, guess higher"
            : "Getting hotter, guess lower";
      } else if (guess < secretNumber) {
        response.textContent = "guess higher";
      } else if (guess > secretNumber) {
        response.textContent = "guess lower";
      } else {
        response.textContent = "Correct!";
      }

      firstGuess = guess;
    });