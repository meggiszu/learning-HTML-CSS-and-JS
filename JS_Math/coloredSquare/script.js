document.addEventListener("DOMContentLoaded", function() {

  const btn = document.querySelector("#btn-changeColor");
  const square = document.querySelector("#square");

  btn.addEventListener("click", function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = "rgb(" + r + "," + g + "," + b + ")";

    square.style.backgroundColor = randomColor
  });

});

