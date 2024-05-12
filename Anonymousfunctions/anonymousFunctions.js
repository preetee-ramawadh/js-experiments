"use strict";

// Do you see that we didn't write the init function.  Instead, 
// we assigned an anonymous function to the window's onload.  
// It looks just like a named function but is missing the name between the word function and the ()
window.onload = function() {
   const btn = document.getElementById("helloBtn");
   btn.onclick = sayHello;      
};

function sayHello() {
   alert("Hello!");  // low-tech popup message
}
