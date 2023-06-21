function updateClock() {
  function getSelector(seletor) {
    return document.getElementById(seletor);
  }

  const hoursElement = getSelector("jsHours");
  const minutesElement = getSelector("jsMinutes");
  const secondsElement = getSelector("jsSeconds");

  const date = new Date();
  const currentTime = date.getHours().toString().padStart(2, "0");
  const currentMinute = date.getMinutes().toString().padStart(2, "0");
  const currentSeconds = date.getSeconds().toString().padStart(2, "0");

  hoursElement.textContent = currentTime;
  minutesElement.textContent = currentMinute;
  secondsElement.textContent = currentSeconds;
}
updateClock();

setInterval(updateClock, 1000);
