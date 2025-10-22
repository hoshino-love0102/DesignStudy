function pad(n) {
  return String(n).padStart(2, "0");
}

function setToday() {
  const now = new Date();
  const y = now.getFullYear();
  const m = pad(now.getMonth() + 1);
  const d = pad(now.getDate());
  document.getElementById("current-date").textContent = `${y}.${m}.${d}`;
}

function updateClock() {
  const now = new Date();
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());
  document.getElementById("current-time").textContent = `${hh}:${mm}:${ss}`;
}

setToday();
updateClock();
setInterval(updateClock, 1000);