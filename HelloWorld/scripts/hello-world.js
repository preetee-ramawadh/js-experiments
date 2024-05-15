"use strict";

// A function to show a greeting
function showGreeting() {
   // TODO: Find the messageDiv element
   let messageDiv = document.getElementById("messageDiv");

   // TODO: Set the div's contents to a string
   messageDiv.innerHTML = "Hello World!";
}       

// calls the showGreeting() function when the .js
// file loads and the line below is encountered
showGreeting();
