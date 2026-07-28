/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits.length>1) {
    digits[digits.length - 1] < 9 ? digits[digits.length - 1]++ : (digits[digits.length - 1] = 0, digits[digits.length - 2]++);
    console.log(digits);
}
else if (digits.length<=1) {
    digits[digits.length - 1] < 9 ? digits[digits.length - 1]++ : (digits[digits.length-1] = 0 , digits.unshift(1));
    console.log(digits);
}
};

let digits = [9];
if (digits.length>1) {
    digits[digits.length - 1] < 9 ? digits[digits.length - 1]++ : (digits[digits.length - 1] = 0, digits[digits.length - 2]++);
    console.log(digits);
}
else if (digits.length<=1) {
    digits[digits.length - 1] < 9 ? digits[digits.length - 1]++ : (digits[digits.length-1] = 0 , digits.unshift(1));
    console.log(digits);
}