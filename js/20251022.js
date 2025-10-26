function pad(n) { return String(n).padStart(2, "0"); }

function renderTime(s) {
  const m = pad(Math.floor(s / 60));
  const ss = pad(s % 60);
  document.getElementById("timer-display").textContent = `${m}:${ss}`;
}

let rest = 25 * 60;
let id = null;
let running = false;
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

function stop() {
  clearInterval(id);
  id = null;
  running = false;
  startBtn.textContent = "시작";
}

startBtn.addEventListener("click", () => {
  if (running) {
    stop();
  } else {
    running = true;
    startBtn.textContent = "일시정지";
    id = setInterval(() => {
      rest--;
      renderTime(rest);
      if (rest <= 0) {
        stop();
      }
    }, 1000);
  }
});

resetBtn.addEventListener("click", () => {
  stop();
  rest = 25 * 60;
  renderTime(rest);
});

renderTime(rest);
