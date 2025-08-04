function updateClock() {
  const now = new Date();

  // Convert UTC time to IST (UTC+5:30)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 5.5 * 3600000);

  const seconds = istTime.getSeconds();
  const minutes = istTime.getMinutes();
  const hours = istTime.getHours();

  const secondDeg = seconds * 6; // 360 / 60
  const minuteDeg = minutes * 6 + seconds * 0.1; // 360 / 60
  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 360 / 12

  document.getElementById("second").style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
  document.getElementById("minute").style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  document.getElementById("hour").style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
}

// Run every second
setInterval(updateClock, 1000);

// Initial call
updateClock();


function updateClock() {
  const now = new Date();

  // Convert UTC time to IST
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 5.5 * 3600000);

  const seconds = istTime.getSeconds();
  const minutes = istTime.getMinutes();
  const hours = istTime.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  document.getElementById("second").style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
  document.getElementById("minute").style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  document.getElementById("hour").style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;

  // ✅ Update Digital Clock
  const pad = (n) => String(n).padStart(2, '0');
  const digitalTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("digital-clock").textContent = digitalTime;
}
