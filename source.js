let array = [];
let isSorting = false;
let stopRequested = false;

const container = document.getElementById('array-container');
const delay = ms => new Promise(res => setTimeout(res, ms));

function generateArray(size = 50) {
  stopRequested = true;  // cancel if sorting
  setStatus("");

  const screenWidth = window.innerWidth;
  if (!size) {
    size = screenWidth < 768 ? 30 : 50;
  }

  setTimeout(() => {    // wait a sec before regenerating
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 300) + 20);
    renderArray();
  }, 100);
}

function setStatus(message) {
  document.getElementById('status').textContent = message;
}

function setButtonsDisabled(disabled) {
  // Disable sorting & generate buttons
  const buttons = document.querySelectorAll('.sort-btn, .generate-btn');
  buttons.forEach(btn => {
    btn.disabled = disabled;
    btn.style.opacity = disabled ? 0.5 : 1;
    btn.style.cursor = disabled ? 'not-allowed' : 'pointer';
  });
}

function renderArray() {
  container.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${array[i]}px`;
    container.appendChild(bar);
  }
}
function setStatus(message, color = 'green') {
  const status = document.getElementById('status');
  status.textContent = message;
  status.style.color = color;
}

function stopSorting() {
  stopRequested = true;
  setButtonsDisabled(false);
  setStatus('Stopped');
}







