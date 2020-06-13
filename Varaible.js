// const (i can not reassign later)
 // let (local variabe .will exist inside the scope of the inner most curly braces surronding on it )
 //var ( global variable ) 
 
 <script> 
 
 // this variable exists even outside the loop 
 
 if (true) { 
 var messege = 'Hello!'; 
 } 
 
 alert (messege);
 </script>
 
 .......................
 <script> 
 
 // this variable exists only inside the loop 
 
 if (true) { 
 let messege = 'Hello!'; 
 } 
 
 alert (messege);
 </script>
 
 
 /////
 
 <script>
 document.addEventListner ('DOMContentLoaded', funtion () {
  document.querySelector ('#form').onsubmit = function() {
    const name = document.querySelector ('#name').value;  // get me html input field name and get the value of that and select as new variable name
                                                            
      alert (`Hello ${name}!`); // alert the messege hello + name variable 
      }
      })
      <html>
      <form id = "form" >
      <input id ="name" cutocomplete = "off" autofocus placeholder = "name"type = "text" >
      <input type = "submit">
      
      <html>
      
      
      
      
      
      
