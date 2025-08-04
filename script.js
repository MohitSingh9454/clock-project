function updateClock() {
  let now = new Date();
  // Convert to IST
  let utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  let indiaTime = new Date(utcTime + 5.5 * 60 * 60 * 1000);

  let sec = indiaTime.getSeconds();
  let min = indiaTime.getMinutes();
  let hr = indiaTime.getHours();
  let day = indiaTime.getDay();
  let date = indiaTime.getDate();
  let month = indiaTime.getMonth();
  let year = indiaTime.getFullYear();

  let secRotation = sec * 6;
  let minRotation = min * 6 + sec * 0.1;
  let hrRotation = (hr % 12) * 30 + min * 0.5;

  document.getElementById("second").style.transform = `translate(-50%, -100%) rotate(${secRotation}deg)`;
  document.getElementById("minute").style.transform = `translate(-50%, -100%) rotate(${minRotation}deg)`;
  document.getElementById("hour").style.transform = `translate(-50%, -100%) rotate(${hrRotation}deg)`;

  // Digital Clock (hh:mm:ss AM/PM)
  let ampm = hr >= 12 ? "PM" : "AM";
  let h = hr % 12 || 12;
  h = h < 10 ? "0" + h : h;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;

  document.getElementById("digital-clock").textContent = `${h}:${m}:${s} ${ampm}`;

  // Extra Info - Day, Date
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let fullDate = `${days[day]}, ${date < 10 ? "0" + date : date} ${months[month]} ${year}`;
  document.getElementById("extra-info").textContent = fullDate;
}

setInterval(updateClock, 1000);
updateClock();
