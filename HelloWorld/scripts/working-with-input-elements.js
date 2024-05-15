
"use strict"

function showMessage(){
// We want this code to run when the user clicks the Show button
let nameField = document.getElementById("nameField");
let ageField = document.getElementById("ageField");

// Get values in the name and age fields
let yourname = nameField.value;
let age =  ageField.value;   	// age is a string here

let message = 
  "Hi " + yourname + "! I hear you are " + age + " years old!";

//another way of constructing string message
let messageUsingBacktick = `Hello ${yourname} I hear your age is ${age}`;

const messagePara = document.getElementById("messagePara");
messagePara.innerHTML = messageUsingBacktick;
}
