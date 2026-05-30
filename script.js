const guessInput = document.getElementById("guess");
  const checkBtn = document.getElementById("check");
  const respond = document.getElementById("respond");

  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let firstGuess = null;

  respond.textContent = "";

  checkBtn.addEventListener("click", () => {
    const guess = Number(guessInput.value);
    if (!guessInput.value) return;

    if (firstGuess === null) {
      firstGuess = guess;

      if (guess < secretNumber) {
        respond.textContent = "guess higher";
      } else if (guess > secretNumber) {
        respond.textContent = "guess lower";
      } else {
        respond.textContent = "Correct!";
      }
      return;
    }

    const prevDiff = Math.abs(secretNumber - firstGuess);
    const currentDiff = Math.abs(secretNumber - guess);

    if (currentDiff < prevDiff) {
      respond.textContent =
        guess < secretNumber
          ? "Getting hotter, guess higher"
          : "Getting hotter, guess lower";
    } else if (guess < secretNumber) {
      respond.textContent = "guess higher";
    } else if (guess > secretNumber) {
      respond.textContent = "guess lower";
    } else {
      respond.textContent = "Correct!";
    }

    firstGuess = guess;
  });
