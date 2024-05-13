"use strict";

function calculateTotalExpenses(expenses) {

    let noOfItems = expenses.length;
    let sum = 0;

    //looping through each item in expenses
    for (let i = 0; i < noOfItems; i++) {
         //adding price in all items
        sum += expenses[i].price;  
    }
    return sum;
};

let lunch = [
    { item: "Chicken Fajitas", price: 19.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

let myExpenses = calculateTotalExpenses(lunch);
console.log(`subTotal: ${myExpenses.toFixed(2)}`);

let taxOnMyExpenses = myExpenses * 0.8 ;
console.log(`Tax on subTotal: ${taxOnMyExpenses.toFixed(2)}`);

let tipOnMyExpenses = myExpenses * 1.8 ;
console.log(`Tip on subTotal: ${tipOnMyExpenses.toFixed(2)}`);