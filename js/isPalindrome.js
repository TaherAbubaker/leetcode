/**
 * @param {number} x
 * @return {boolean}
 */

let x = 121

var isPalindrome = function(x) {

    if (x < 0) return false

    let number = x.toString().split('');
    
    let i = 0
    let j = (number.length) - 1

    while (j > i) {
        if (number[j] != number[i]) {
            console.log("fasle");
            return false
        }
        ++i;
        --j;
    }

    console.log("true");
    return true;
};

isPalindrome(x)