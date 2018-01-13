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

  function circle(){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    const cxt = canvas.getContext("2d");
    const R = 45;
    cxt.beginPath();
    cxt.arc(300,50,R,2 * Math.PI, false);
    cxt.lineWidth = 2;
    cxt.stroke();
    }
  }

  circle();

  function DrawCircles() {
    const canvas = document.getElementById("canvas1");
    if (canvas.getContext) {
      const cxt = canvas.getContext("2d");

      X = 0;
      Y = 0; 
      R = 30;
      colors = ["#DC4C46", "#672E3B", " #C48F65", " #898E8C"," #005960"];

      for (var i = 0; i < 5; i++) {
        cxt.beginPath();
        cxt.arc(X = X + 50, Y = Y + 50, R, 0, Math.PI *2);
        cxt.fillStyle = colors[i];
        cxt.fill();
        cxt.stroke();
        cxt.closePath();
      }
    }
  }

  DrawCircles();

  function DrawSquares() {
    const canvas = document.getElementById("canvas2");
    if (canvas.getContext) {
      const cxt = canvas.getContext("2d");

      colors = ["green", "yellow", "grey", "blue"];
      X = 0;
      Y = 0;

      
      for (var i = 0; i < 4; i++) {
        cxt.fillRect(X = X + 50,Y = Y + 50, 40, 40);
        cxt.fillStyle = colors[i];
        cxt.stroke();
      }
    }
  }

  DrawSquares();



});



