let boxX = document.querySelector("#posX");
let boxY = document.querySelector("#posY");

let onMouseMove = function(e) {
  let posX = e.clientX;
  let posY = e.clientY;
  
  boxX.textContent = posX;
  boxY.textContent = posY;
};

document.addEventListener("mousemove", onMouseMove);