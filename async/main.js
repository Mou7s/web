const button = document.querySelector("#set-alarm");
button.addEventListener("click", setAlarm);

function setAlarm() {
  window.setTimeout(() => {
    console.log("Wake up!");
  }, 1000);
}
