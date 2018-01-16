document.addEventListener("DOMContentLoaded", function(e) {
  const input = document.querySelector("#text1");
  const result = document.querySelector("#text2");
  let counter = 0;

  const coloredChars = (input) => {
    const val = input.value
    const char = val.charAt(counter++);
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = "rgb(" + r + "," + g + "," + b + ")"; 

    console.log(randomColor);

    const text = result.innerHTML;
    result.innerHTML = text + "<span style='color:" + randomColor + ";'>" + char + "</span>";


  };


  input.addEventListener("keyup", function(e){
    coloredChars(input);
  });

});