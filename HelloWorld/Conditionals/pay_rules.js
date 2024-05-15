function calculatePay(payRate, hoursWorked){
    let grossPay = 0;
    if(hoursWorked>40){
        let extraHoursWorked = hoursWorked - 40;
        let payRateForExtraHours = payRate * 1.5;
        
         return (grossPay = ((40 * payRate) + (extraHoursWorked * payRateForExtraHours))) ;

    } else {
        return (grossPay = hoursWorked * payRate) ;
    }
}

let grossPay = calculatePay(12.50, 20);
console.log("gross pay: " + grossPay);

grossPay = calculatePay(25.00, 40);
console.log("gross pay: " + grossPay);

grossPay = calculatePay(17.30, 45);
console.log("gross pay: " + grossPay);