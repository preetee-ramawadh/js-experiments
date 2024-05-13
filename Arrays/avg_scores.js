"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
    let noOfScores = myScores.length;
    let sum = 0;
    for (let i = 0; i < noOfScores; i++) {
        sum += scores[i];
    }

    return sum/noOfScores;


};

let myAverage = getAverage(myScores);
console.log("my average: " + myAverage.toFixed(2));