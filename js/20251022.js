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

startBtn.addEventListener("click", () => {
  if (running) {
    clearInterval(id);
    id = null;
    running = false;
    startBtn.textContent = "시작";
  } else {
    running = true;
    startBtn.textContent = "일시정지";
    id = setInterval(() => {
      rest--;
      renderTime(rest);
      if (rest <= 0) {
        clearInterval(id);
      }
    }, 1000);
  }
});

renderTime(rest);
