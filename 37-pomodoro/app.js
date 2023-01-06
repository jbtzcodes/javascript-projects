let initialTime = 600;
let restTime = 300;

function formatTime(time) {
  return `${Math.trunc(time / 60)}:${
    time % 60 < 10 ? `0${time % 60}` : time % 60
  }`;
}

const timerPlay = document.querySelector(".timerPlay");
const timerPause = document.querySelector(".timerPause");

timerPlay.textContent = formatTime(initialTime);
timerPause.textContent = formatTime(restTime);

const startPauseBtn = document.querySelector(".start");
startPauseBtn.addEventListener("click", togglePomodoro);

let currentInterval = false;
let timerID;
function togglePomodoro() {
  handlePlayPause();

  if (currentInterval) return;
  currentInterval = true;

  initialTime--;
  timerPlay.textContent = formatTime(initialTime);


  timerID = setInterval(handleTicks, 1000);
}

let pause = true;
function handlePlayPause() {
  if (startPauseBtn.firstElementChild.src.includes("play")) {
    startPauseBtn.firstElementChild.src = "ressources/pause.svg";
    pause = false;
  } else {
    startPauseBtn.firstElementChild.src = "ressources/play.svg";
    pause = true;
  }
}



let cyclesNumber = 0;

function handleTicks() {
  if (!pause && initialTime > 0) {
    initialTime--;
    timerPlay.textContent = formatTime(initialTime);
  } else if (!pause && initialTime === 0 && restTime > 0) {
    restTime--;
    timerPause.textContent = formatTime(restTime);
  } else {
    initialTime = 1799;
    restTime = 300;
    timerPlay.textContent = formatTime(initialTime);
    timerPause.textContent = formatTime(restTime);

  }
}

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reset);

function reset() {
  initialTime = 1800;
  restTime = 300;
  timerPlay.textContent = formatTime(initialTime);
  timerPause.textContent = formatTime(restTime);
  startPauseBtn.firstElementChild.src = "ressources/play.svg";

  clearInterval(timerID);
  currentInterval = false;
}
