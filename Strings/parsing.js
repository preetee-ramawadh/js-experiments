"use strict";
function parseAndDisplayName(name){
 
    let spacePosition = name.indexOf(" ");
    
    console.log(`Name: ${name}`);
    console.log(`First name: ${name.substring(0, spacePosition)}`);
    console.log(`Last name: ${name.substring(spacePosition+1)}`);

}
parseAndDisplayName();

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");