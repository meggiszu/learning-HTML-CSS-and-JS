document.addEventListener("DOMContentLoaded", function() {
  let active = false
  let currentColor = "black";

  const colorBoxes = document.querySelectorAll('.box')

  colorBoxes.forEach(function(el, i) {
    el.addEventListener('click', function(e) {
      currentColor = window.getComputedStyle(e.target, null)
        .getPropertyValue("background-color"); 
    })
  })


  const draw = function(e) {
    if(active == false) {
      return;
    } 

    const x = e.clientX;
    const y = e.clientY;
    const div = document.createElement('div');
    div.style.top = y + "px";
    div.style.left = x + "px";
    div.setAttribute('class', 'dot')
  
    div.style.backgroundColor = currentColor
    paint.appendChild(div);
   
  };


  const toggleActive= function() {
    active = !active
  };

  paint.addEventListener("mousemove", draw);
  paint.addEventListener("mousedown", toggleActive);
  paint.addEventListener("mouseup", toggleActive);
  paint.addEventListener("drag", function() { active = false });
});



