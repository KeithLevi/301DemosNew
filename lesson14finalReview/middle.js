"use strict";

/* 4.	Write a function that takes a string parameter 
and returns the middle character of the string. If string is of 
even length then function should return the middle two characters.
*/

/**
 * 
 * @param {string} str any string
 * @returns {string} the middle character
 * process - get length and divide by 2
 *  - if divisible by 2 then return middle 2 , else just the middle one
 */
function middle(str) {
    const length = str.length;
    const midpoint = Math.floor(length / 2);

    if (length % 2 === 0) {
        return str[midpoint-1] + str[midpoint];
    } else {
        return str[midpoint];
    }
}

console.log("expect b :  ", middle("abc"));
console.log("expect bc :  ", middle("abcd"));
