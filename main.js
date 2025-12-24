const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const music = document.getElementById("music");
const column = document.querySelector(".column");

/* duplication pour défilement continu */
column.innerHTML += column.innerHTML;

startBtn.addEventListener("click", async () => {
  try {
    await music.play();
  } catch (e) {
    console.log("Son bloqué par le navigateur");
  }

  welcome.classList.add("hidden");
});
