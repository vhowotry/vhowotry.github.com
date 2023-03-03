const clock = document.querySelector("h2#clock");

// function padZero(number) {
//   return String(number).padStart(2, "0");
// }
const padZero = (number) => String(number).padStart(2, "0");

function getTime() {
  const date = new Date();
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getTime();
setInterval(getTime, 1000);
