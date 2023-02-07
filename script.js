let currentX;
let currentY;
let original;
let buttonNo = document.getElementById('buttonNo');

buttonNo.addEventListener('mouseover', (e) => {
  original = {
    left: buttonNo.getBoundingClientRect().x,
    top: buttonNo.getBoundingClientRect().y,
  };
  let rand = Math.random() < 0.5;
  let rand2 = Math.random() < 0.5;
  buttonNo.style.left = (Math.abs(rand ? original.left - 150 : original.left + 150) % window.innerWidth) + "px";
  buttonNo.style.top = (Math.abs(rand2 ? original.top + 150 : original.top - 150) % window.innerHeight) + "px";
});

