document.addEventListener("DOMContentLoaded", function(e){

  function js_style() {
    var para = document.getElementById("text");
  
    para.style.color = "red";
    para.style.fontSize = "50px";
    para.style.fontFamily = "Tahoma";
    para.style.border = "3px solid red";
  };



  var button = document.getElementById("jsstyle");
  button.addEventListener('click', js_style);
});  



/* function js_style() {
      text.style.color = "red";
      text.style.fontSize = "50px";
      text.style.fontFamily = "Tahoma";
}; */