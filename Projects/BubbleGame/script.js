let scoreVal = 0;
let seconds = 30;
let hitVal;

// INCREASE SCORE

function scoreInc() {
  scoreVal += 5;
  score.textContent = scoreVal;
}

// RENDER BUBBLES

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 100; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<bubble>${rn}</bubble>`;
  }

  document.querySelector(".bottom").innerHTML = clutter;
}

// GET RANDOM HIT

function getRnHit() {
  hitVal = Math.floor(Math.random() * 10);
  hit.textContent = hitVal;
}

// TIMER

function runTimer() {
  let startTimer = setInterval(function () {
    if (seconds > 0) {
      seconds--;
      timer.textContent = seconds;
    } else {
      clearInterval(startTimer);
      gameAr.innerHTML = `<h2 width='100%'>GAME OVER❗YOUR SCORE IS ${scoreVal} ✨</h2>`;
    }
  }, 1000);
}

// THE GAME

gameAr.addEventListener("click", function (hitNum) {
  let click = hitNum.target.textContent;
  if (click == hitVal) {
    scoreInc();
    makeBubble();
    getRnHit();
  }
});

// INITIALIZE THE GAME

function playGame() {
    makeBubble();
    getRnHit();
    runTimer();
}

playBtn.addEventListener('click', playGame); 