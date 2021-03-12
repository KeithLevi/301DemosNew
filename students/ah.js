"use strict";

// constprompt = require("prompt-sync")();
// //let GCD;
// constnumber1 = prompt('Enter a first positive integer: ');
// constnumber2 = prompt('Enter a second positive integer: ');

const isGCD = function (number1, number2) {
    let GCD;
    for (let i = 1; i <= number1 && i <= number2; i++) {

        if (number1 % i === 0 && number2 % i === 0) {
            GCD = i;
        }
    }
    return GCD;
};

console.log(isGCD(10,20));

//console.log(`GCD of 10​​​​​​​​ and 20​​ ${GCD(10,20)}​​​​​​​​.`);

