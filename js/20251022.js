function pad(n) {
  return String(n).padStart(2, "0");
}

function renderTime(s) {
  const m = pad(Math.floor(s / 60));
  const ss = pad(s % 60);
  document.getElementById("timer-display").textContent = `${m}:${ss}`;
}

let rest = 25 * 60;
let id = null;

document.getElementById("start-btn").addEventListener("click", () => {
  if (id) return;

  id = setInterval(() => {
    rest--;
    renderTime(rest);
    if (rest <= 0) {
      clearInterval(id);
    }
  }, 1000);
});

renderTime(rest);