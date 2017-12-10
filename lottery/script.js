document.addEventListener("DOMContentLoaded", function(e) { 
  let clicked = false
  const result = [];

  function findRandomUniqueNumber() {
    const res = Math.floor(Math.random() * 99 + 1);
    for (let i = 0 ; i < result.length; i++) {
      if (res === result[i]) {
        return findRandomUniqueNumber()
      }
    }
    return res;
  }

  const button = document.querySelector("button");

  button.addEventListener("click", function() {
    if (!clicked) {
      const container = document.getElementById('container');

      let inv = setInterval(function() {
        const div = document.createElement('div');
	      const num = findRandomUniqueNumber()
        result.push(num);

        div.setAttribute('class', 'ball');
        div.textContent = num;
        container.appendChild(div);

        if (result.length === 10) clearInterval(inv);
      }, 500);

      clicked = true
    } else {
      return false;
    }
  });
});
