"use strict";

let famousActors = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

// Who is the actor whose ID is 187?

function findActorID(arrayValue) {
    if (arrayValue.memID === 187) {
        return true;
    }
    else {
        return false;
    }
};

const actorWithId187 = famousActors.find(findActorID);

// If no value in the array was found, actorWithId187 will be undefined
if (actorWithId187 != undefined) {
    console.log(`actor with ID 187 is: ${actorWithId187.name}`);
}
else {
    console.log("No actor whose ID is 187");
}

// Who has have been in at least 3 films?

function actorInAtleastThreeFilms(actor){
    if((actor.films).length >= 3){
        return true;
    }else {
        return false;
    }
}

let actorInAtLeastThreeFilmsArray = famousActors.filter(actorInAtleastThreeFilms);
let resultArraySize = actorInAtLeastThreeFilmsArray.length ;
if (resultArraySize >0) {
    console.log(`actors been in at least 3 films are: `);
    for(let a=0; a<resultArraySize; a++){
        console.log(actorInAtLeastThreeFilmsArray[a].name);
    }
}
else {
    console.log("No actor has been in at least 3 films");
}

// Who has a name that starts with "Bob"?

function actorsWithStartingA(arrayValue){
    let name = arrayValue.name;
    if(name.startsWith("Bob")){
        console.log(name);
        return true;
    }else{
        return false;
    }
};

const actorNameStartWithA = famousActors.filter(actorsWithStartingA);

if(actorNameStartWithA != undefined){
    let actorNameStartWithASize = actorNameStartWithA.length;
    console.log("Actors who has names starting with 'Bob' are: ");
    for(let i=0; i < actorNameStartWithASize; i++){
        console.log(actorNameStartWithA[i].name);
    }
}

// HARDER: Which actors have been in a film that starts with "A"
function filmWithA(film){
    if(film.startsWith("A")){
        return true;
    }else{
        return false;
    }
};

function actorWithFilmA(actor){
    const films = actor.films;
   /* console.log("films: "+films);
    console.log("films length: "+films.length);
    console.log("film name: " +actor.films[0]);*/
    let filmWithAPresent = films.find(filmWithA);
    //console.log("filmWithAPresent: "+ filmWithAPresent);
    if(filmWithAPresent != undefined){
        return true;
    }else{
        return false;
    }
};

const actorWithFilmNameStartA = famousActors.filter(actorWithFilmA);

if(actorWithFilmNameStartA != undefined){
    console.log("actors been in a film that starts with 'A' are: ")
    let size = actorWithFilmNameStartA.length;
    //console.log("size: "+size);
    for(let i=0; i < size; i++){
        console.log(actorWithFilmNameStartA[i].name);
    }
}
