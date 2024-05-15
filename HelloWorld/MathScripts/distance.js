// sample inputs
let x1 = 5;
let x2 = 10;
let y1 = 12;
let y2 = 3;

// calculations
let distance_between_two_points = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));

// output
console.log("The distance between two points x1,y1 (" + x1+","+ y1+ 
    ") and x2,y2 ("+x2+", "+y2 +") is: " +distance_between_two_points.toFixed(2));