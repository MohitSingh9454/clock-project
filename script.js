function updateClock() {
  let now = new Date();
  // Convert to IST (India time)
  let utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  let indiaTime = new Date(utcTime + 5.5 * 60 * 60 * 1000);
  let sec = indiaTime.getSeconds();
  let min = indiaTime.getMinutes();
  let hr = indiaTime.getHours();
  let secRotation = sec * 6;
  let minRotation = min * 6 + sec * 0.1;
  let hrRotation = (hr % 12) * 30 + min * 0.5;
  document.getElementById("second").style.transform = "translate(-50%, -100%) rotate(" + secRotation + "deg)";
  document.getElementById("minute").style.transform = "translate(-50%, -100%) rotate(" + minRotation + "deg)";
  document.getElementById("hour").style.transform = "translate(-50%, -100%) rotate(" + hrRotation + "deg)";
 // Digital clock part
  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let fullTime = h + ":" + m + ":" + s;
  document.getElementById("digital-clock").textContent = fullTime;
}

setInterval(updateClock, 1000);
updateClock();
