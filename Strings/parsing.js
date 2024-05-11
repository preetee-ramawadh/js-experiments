"use strict";
function parseAndDisplayName(){
    let name = "Brenda Kaye";
    let spacePosition = name.indexOf(" ");
    
    console.log(`Name: ${name}`);
    console.log(`First name: ${name.substring(0, spacePosition)}`);
    console.log(`Last name: ${name.substring(spacePosition+1)}`);

}
parseAndDisplayName();