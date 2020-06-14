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
      
     #########
    <script>
    document.addEventListener (DOMContentLoaded', () =>{
      document.querySelectorAll('#color-change').onchange function() {     // on i change my selecction on drop down value then run the funtion 
                                                                           // change the hello color to be this refer to what ever value this funtion is operated on
                                                                            // on function will keep the scop of this through the whole function 
       document.querySelector('#hello').style.color = this.value;
    }
});
      </script>
    
    <body>
      <h1 id = "hello"> <h1>
        <select id = "color-chage">
          <option value = "black"> Black </option>
          <option value = "red"> Red </option>
          <option value = "blue"> Blue </option>
          <option value = "green"> Green </option>
    </select>
</body>
 


#######

 <script>
   document.querySelector('#new-Task'').onsubmit = () => {     
       // create new intem for list 
const li = documenet.createElement (;li)
li.innerHTML = document.querySelector('#task').value ;
// add new item to the tassk list 
document.querySelector('#task').append(li);

//clear input field 
document.querySelector('#task').value = '';

//stop form from submitting
return false; 
    };
});
      </script>

<ul id = "task" > 
  </ul>
<form id = "neew- Task>
<input is = "task" autocomplete = "off" autofocus placeholder = "New Task" tyoe = "text">
  <input type = "submit"
</form>
#######################################################
<script>
     document.addEventListener (DOMContentLoaded', () =>{
                                //setinterval takes two argument it will increment the count in every 1000 milisecond
                                setInterval (count, 1000) 
});

let counter = 0;
function count () { 
  counter ++;
  document.querySelector ('#counter').innerHTML = counter;
}
</script>
   
    
############eo 
  <script >
    if (!localStorage.getItem ('counter'))
        localStorage.setItem('ceoounter', 0);

// load current value of the counter 

document.addEvent Listener ('DOMContentLoaded', (0 +. { 
   document.querySelector ('#counter').innerHTML = localStorage.getItem('counter')
                            
                            //count every time button is clicked 
   
   document.querySelector ('button').onclick = () => {
  //increment current cunter 
  let counter = loclStorage.getItem ('conuter');
   counter ++;
                                     
                                     //update counter 
  
  document.querySelector ('#counter').innerHTML = localStorage.                                
  loclStorage.getItem ('conuter' counter );
}
});
                                     
                                     
                                     
                            
                            
                            
                            
                            







