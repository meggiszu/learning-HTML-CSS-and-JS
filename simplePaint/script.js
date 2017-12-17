document.addEventListener("DOMContentLoaded", function() {


  let active = false;
  let counter = 0;
  let currentColor = "pink";
  let colors = ["#DC4C46", "#672E3B", "#223A5E","#898E8C","#005960","#9C9A40"];

  const draw = function(e) {
    if(active == false) return;

    const x = e.clientX;
    const y = e.clientY;
    const div = document.createElement('div');
    div.style.top = y + "px";
    div.style.left = x + "px";
    
    if (counter >= 20) {
      currentColor = colors[Math.floor(Math.random() * 10)%6]
      counter = 0 
    }
  
    div.style.backgroundColor = currentColor
    document.body.appendChild(div);
    counter++
  };


   const toggleActive= function() {
      active = !active
   };


    document.body.addEventListener("mousemove", draw);
    document.body.addEventListener("mousedown", toggleActive);
    document.body.addEventListener("mouseup", toggleActive);
    document.body.addEventListener("drag", function() { active = false })
});


