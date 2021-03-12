  
"use strict";
exports.insertArray = insertArray;
exports.ispalindrome = ispalindrome;
exports.reverse2String = reverse2String;
exports.enhancedIncludes = enhancedIncludes;

exports.ssReverse = ssReverse;
exports.merge = merge;


//  home work array methods 
///////

//1. Write a function, isArrayEqual, that returns true if two arrays have === elements, else false;

function insertArray(arr1, arr2) {
    if (arr1.length == arr2.length) {
        return true;

    }
    return false;
}

// 2 Write a function that checks if an array is palindrome by using push and pop array methods to
//reverse the array and then isArrayEqual method you wrote for 1.
function ispalindrome(arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == arr[arr.length - (i + 1)]) {

            return true;

        }
        return false;

    }
}

// question 3

function reverse2String(arr) {
    let newstr = '';
    for (let i = arr.length - 1; arr >= 0; i--) {

        newstr += arr[i];

    }
    return newstr;

}

// question 4

function enhancedIncludes(arr, a) {
    for (i = 0; i <= a.length - 1; i++) {

        if (arr.includes == a) {
            return true;

        } else if (arr[0] == a) {

        }
        return -1;
    }


}

// number 5 
function ssReverse(arr) {

    let temp = [];
    for (let i = arr.length - 1; i >= 0; i++) {
        temp = (arr.slice(0, arr.length - 1));
    }
    return temp;

}
//  number 6 merged array methods

function merge(arr1, arr2) {
    let result = [arr1, arr2];
    return result.sort((a, b) => a - b);
}

