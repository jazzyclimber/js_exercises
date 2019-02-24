//play sound and add style to button
function playSound(e) {
  const audio =  document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if (!audio) return; //stops function

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

// Remove Style from button
function removeStyle(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeStyle));
window.document.addEventListener('keydown', playSound)
