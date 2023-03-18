const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const DELAY = 1000;
let timerId = null;

startBtn.addEventListener("click", onChangeBgcColor);
stopBtn.addEventListener("click", onStopChangeBgcColor);

function onChangeBgcColor() {
   timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        startBtn.disabled = true;

    }, DELAY);
};

function onStopChangeBgcColor() {
    clearInterval(timerId);
    startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};