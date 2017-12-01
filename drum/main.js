/*e to zmienna reprezentująca event (zdarzenie) - w tym przypadku wciśnięcia klawisza na klawiaturze). 
Właściwość keyCode zawiera wartość odpowiadającą wciśniętemu klawiszowi.
click event jest wtedy, gdy ktoś kliknie na coś i coś odpali event. wtedy click event wie - o ktoś mnie kliknął ;)*/

/*transitionend jest wtedy gdy chcemy, aby transition, które się wydarzyło, zakończyło się bez dodatkowego działania*/

document.addEventListener('DOMContentLoaded', function() {

  function playSound(e) {
	  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //Do stałej audio przypisz element audio posiadający atrybut "data-key" o wartości e.keycode
	  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //Do stałej keys przypisz klasę key posiadający atrybut "data-key" o wartości e.keycode.
   	  if (!audio) return; //jeśli nie ma audio zawróc
   	
   	  audio.currentTime = 0; //funkcja sprawiająca, że nie czekamy na zakończenie dźwięku, tylko ładuje się szybko od nowa
      audio.play();	 //odtwarzaj audio
      key.classList.add('playing'); //funkcja dodająca zmiany z CSS z klasy playing, m.in obramowanie
  }

//funkcja usuwająca transition z css
function removeTransition(e) {
  if(e.propertyName === 'transform') this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

})