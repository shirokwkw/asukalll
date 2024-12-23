const startDate = new Date('November 25, 2024 16:54:00').getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = now - startDate;

  if (distance < 0) return;

  const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = totalDays % 30;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownEl = document.getElementById('countdown');
  countdownEl.innerHTML = ''; // Clear previous content

  // Show appropriate boxes based on the time passed
  if (years > 0) {
    countdownEl.innerHTML += createBox(years, 'Years');
  }
  if (years > 0 || months > 0) {
    countdownEl.innerHTML += createBox(months, 'Months');
  }
  if (years > 0 || months > 0 || days > 0) {
    countdownEl.innerHTML += createBox(days, 'Days');
  }
  if (years > 0 || months > 0 || days > 0 || hours > 0) {
    countdownEl.innerHTML += createBox(hours, 'Hours');
  }
  if (years > 0 || months > 0 || days > 0 || hours > 0 || minutes > 0) {
    countdownEl.innerHTML += createBox(minutes, 'Minutes');
  }
  countdownEl.innerHTML += createBox(seconds, 'Seconds');
  
  // Show the boxes with a fade-in effect
  const boxes = countdownEl.getElementsByClassName('box');
  for (let box of boxes) {
    box.style.opacity = 1;
  }
}

function createBox(value, label) {
  return `
    <div class="box">
      <span>${value.toString().padStart(2, '0')}</span>
      <div class="label">${label}</div>
    </div>
  `;
}

function navigateNext() {
  window.location.href = 'home.html';
}

setInterval(updateTimer, 1000);
updateTimer();