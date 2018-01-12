//draw right-angled triangle

document.addEventListener("DOMContentLoaded", function(e) {
  
  function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const cxt = canvas.getContext('2d');

      cxt.beginPath();
      cxt.moveTo(75,75);
      cxt.lineTo(10,75);
      cxt.lineTo(10,25);
      cxt.fill();
    }
  } 

  draw();

  function draw1() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const cxt = canvas.getContext('2d');

      cxt.fillRect(10,90,100,100); // rysuje wypelniony kwadrat (x,y,width,height)

    }
  }

  draw1();

  function draw2(){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    const cxt = canvas.getContext("2d");

    cxt.fillRect(30,210, 60,60);
    cxt.clearRect(50,230,20,20); //wycinam srodek
    }
  }

  draw2();


  function drawText() {
    const canvas = document.getElementById("canvas");
    if(canvas.getContext) {
    const cxt = canvas.getContext("2d");

    cxt.fillText("The New York Times", 150,110);  //wstawiam tekst
    cxt.font = "bold 20px Arial";
    cxt.textBaseline = "middle";
    }
  }
  
  drawText();

});



