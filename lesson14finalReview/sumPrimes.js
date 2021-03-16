"use strict";
/* 1.	Write a JavaScript function isSumOfPrimesEven that takes
an array of positive integers as an argument and returns true if the 
sum of all the prime elements in the given array is even otherwise 
returns false. If the array is empty or if the array does not contain 
any prime element it should return false. */

/**
 * 
 * @param {Array} arr of pos integers
 * @returns {boolean} true if sum of all the prime elements in the given array is even
 */
function isSumOfPrimesEven(arr){
    let sum = 0;
    for (const element of arr){
        if (isPrime(element)){
            sum += element;
        }
    }
  if (sum % 2 === 0) {
      return true;
  } else {
      return false;
  }
}

/**
 * 
 * @param {number} number is a pos integer
 * @returns {boolean} true if prime
 * this is a "stub" -- it sort of works for a quick test
 */
function isPrime(number){
    if ([2,3,5,7,11,13].includes(number)){
        return true;
    } else {
        return false;
    }
}

console.log("expect false: ", isSumOfPrimesEven([1,2,2,3,9]));
console.log("expect true: ", isSumOfPrimesEven([1,2,3,4,5,6]));