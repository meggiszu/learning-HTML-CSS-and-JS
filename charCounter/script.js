document.addEventListener("DOMContentLoaded", function(e) {

  let input = document.querySelector("#customInput");
  let charCount = document.querySelector("#charCount");
  

  var onKeyDown = function() {
    charCount.textContent = input.value.length
  };
    // funkcja powinna do charCount ustawiac textContent czyli zawartosc tekstowa naszego kontenera input na wartosc naszej tekst area i sprawdzac jej dlugosc.


  input.addEventListener("keydown", onKeyDown);

});