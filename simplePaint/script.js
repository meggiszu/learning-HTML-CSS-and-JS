document.addEventListener("DOMContentLoaded", function() {
  let active = false;
  let counter = 0;
  let colors = [
    {color:"#DC4C46", name: "Grenadine", counter: 0}, 
    {color:"#672E3B", name: "Tawny Port", counter: 0}, 
    {color:"#898E8C", name: "Neutral Gray", counter: 0},
    {color:"#4F84C4", name: "Marina", counter: 0},
    {color:"#005960", name: "Shaded Spruce", counter: 0},
    {color:"#9C9A40", name: "Golden Lime", counter: 0},
  ];

  let currentColor = getColor()
  updateCounter(currentColor)

  const paint = document.getElementById('paint')

  function getColor() {
    return colors[Math.floor(Math.random() * 10)%6]
  }

  function updateCounter(col) {
    col['counter']++
    document.getElementById(col['color']).innerHTML = col['counter']
  }

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
    
    if (counter >= 20) {

      const col = getColor()
      updateCounter(col)
      currentColor = col

      counter = 0 
    }
  
    div.style.backgroundColor = currentColor['color']
    paint.appendChild(div);
    counter++
  };


  const toggleActive= function() {
    active = !active
  };

  paint.addEventListener("mousemove", draw);
  paint.addEventListener("mousedown", toggleActive);
  paint.addEventListener("mouseup", toggleActive);
  paint.addEventListener("drag", function() { active = false });
});


