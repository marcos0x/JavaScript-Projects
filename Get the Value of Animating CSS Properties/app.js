const image = document.getElementById('img');
const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

let counter = 0;

function updateValue() {
  const textField = document.getElementById('counter');
  let imageTopPosition = getComputedStyle(image).top;

  textField.textContent = imageTopPosition;

  requestAnimationFrame(updateValue);
}

requestAnimationFrame(updateValue);
