const audio = new Audio("https://your-audio-url.com"); // replace with your own audio URL
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const volumeSlider = document.getElementById("volume");

playButton.addEventListener("click", () => {
  audio.play();
});

pauseButton.addEventListener("click", () => {
  audio.pause();
});

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});
