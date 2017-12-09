document.addEventListener("DOMContentLoaded", function(e) { 
  const result = [];
  let clicked = false

  const losowanie = function() {
    if (!clicked) {
      const container = document.getElementById('container');
      if (result.length === 10) return

      const wynikLosowania = Math.floor(Math.random() * 99 + 1);
      for (let i = 0 ; i < result.length; i++) {
      
        if (wynikLosowania === result[i]) {
          return losowanie()
        }
      }
       
      const div = document.createElement('div');
      div.setAttribute('class', 'ball');
  
      div.textContent = wynikLosowania;
      result.push(wynikLosowania);
      container.appendChild(div);

      clicked = true
    } else {
      return false;
    }
  }
    
  const button = document.querySelector("button");
  button.addEventListener("click",losowanie);
});
