const pressed = [];
const secretCode = '38384040373937396665';

window.addEventListener('keyup', e => {
  pressed.push(e.keyCode);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    document.body.classList.add('rainbow');
  }

  // Press the SPACE bar to reset
  if (e.keyCode === 32) {
    window.location.reload(false);
  }
});
