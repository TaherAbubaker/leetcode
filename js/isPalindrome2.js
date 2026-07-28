/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    console.log(s);
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(s);
    let reved = s.split("").reverse().join("");
    console.log(s);
    return s === reved;
};

let s = "race a car";
console.log(isPalindrome(s));



