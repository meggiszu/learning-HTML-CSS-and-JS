document.addEventListener("DOMContentLoaded", function() {


  let active = false;
  let counter = 0

  const draw = function(e) {
    if(active == false) return;

    const x = e.clientX;
    const y = e.clientY;
    const div = document.createElement('div');
    div.style.top = y + "px";
    div.style.left = x + "px";

    if(counter > 10) {
      div.style.backgroundColor = "blue";
    };

    document.body.appendChild(div);
    counter++
  };


   const drawActive = function() {
      active = !active
  };


    document.body.addEventListener("mousemove", draw);
    document.body.addEventListener("mousedown", drawActive)
    document.body.addEventListener("mouseup", drawActive)
});
