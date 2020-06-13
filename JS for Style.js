<script> 
document.addEventListener (DOMContentLoaded', function(){
document.querySelector('#red').onclick = function() {  // when the red button is clicked run the following function
  document.querySelector ('#hello').style.color = 'red' // get the id hello and style it as the color red
  } ; 
  document.querySelector('#blue').onclick = function() {  
  document.querySelector ('#hello').style.color = 'blue'
  };
  document.querySelector('#green').onclick = function() {  
  document.querySelector ('#hello').style.color = 'green'
  };
  })
  
  
  document.addEventListener (DOMContentLoaded', function(){
document.querySelectorAll('.color-change').foreach (function(button)) {     // select all the button that is clocor change getting back a arraay 
                                                                             // with color-change botton and run a function on each elemment 
                                                                             //inside that array
  button.onclick = function() {
 document.querySelector('#hello').style.color = button.database.color; // change the color to whateer the data attribute color is 
  } ; 
  });
  <html>
  <body>
  <h1 id + "hello"> Hello </h1>
  <button class = "color-change" data-color = "red"> Red </button>
   <button class = "color-change" data-color = "blue"> Blue </button>
    <button class = "color-change" data-color = "green"> Green </button>
    </body>
    
    <html>
    
    
    
    
