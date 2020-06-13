<script>
alert ('Hello World')
</script>

<script> 

function hello () { 
alert ('Hello!');

</script>

<button onclick = "helllo()" > Click Me ! </buttn>
//common events on JS onclick, onmousover, onkeydown, onkeyup, onload, onblur (when object losses focus)..... 
  
  <script>
  
  // function to change heading to goodbye, only select the first match 
  
  function query () {
    document.queryselector ('h1').innerHTML = 'Goodbye';
    }
  </script>
  
  <button onclick = "hello()"> click here ! </button>
  
                   // document.querySelector ('tag')
                    //document.querySelector ('#id')
                    //document.querySelector ('#.class')
  //increment the counteer by one on every click
  <script> 
    let counter = 0;
  function count () {
    counter ++; 
    document.querySelector ('#counter').innerHTML = counter ; //item that has the ID counter and taking that innter hhtl element and putting the value whatever that counter has
    
  }
  </script>
  <h1 id = "counter"> 0 </h1> 
  <button onclick = "count()"> click herre </button>
  
  //increment the counteer by one on every click with loop
  <script> 
    let counter = 0;
  function count () {
    counter ++; 
    document.querySelector ('#counter').innerHTML = counter ; 
    if (counter % 10 === 0 ){
      alert ('Counter is at $ {counter }! ' ); // take the variable counter and plug it in to this part of the string 
                                                // this will alert us when counter mod is 0 
    
    }
  }
  </script>
  
  <h1 id = "counter"> 0 </h1> 
  <button onclick = "count()"> click herre </button>
  
  // we can also do as :
  
  document.addEventListener ('DOMcontentLoaded', function () { 
    document.querySelector 9'button').onclick = count; // Document object model is being done loaded by web browser, then pass the function 
                                                        // tackt the button and ten setting on click attribute as count
                                                        // count function will run only when the button is clicked 
  });
    let counter = 0;
  function count () {
    counter ++; 
    document.querySelector ('#counter').innerHTML = counter ; 
    if (counter % 10 === 0 ){
      alert ('Counter is at ${counter }! ' );  
    
    }
  }
  
  
  
