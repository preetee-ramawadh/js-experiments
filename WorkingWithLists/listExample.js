"use strict";

window.onload = function() {

    // load the dropdown list (see function below)
    initStatesDropdown();
 
    // other stuff

 };
 
  function initStatesDropdown() {
 
    // load the dropdown list
    let states = ["Colorado", "Maine", "Texas", "Washington"];
    let abbrev = ["CO", "ME", "TX", "WA"];
 
    const statesList = document.getElementById("statesList");
 
    let length = states.length;
    for (let i = 0; i < length; i++) {
 
       // create the option element and set the text and
       // value at the same time
       let theOption = new Option(states[i], abbrev[i]);
 
       // append the option as a child of (inside) the 
       // select element
       statesList.appendChild(theOption);
    }
 }
 