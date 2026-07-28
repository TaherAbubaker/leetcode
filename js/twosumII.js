/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

let numbers = [1, 2, 3, 8]
let target = 10

var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if(sum === target)
            return [left + 1, right + 1];

        else if (sum < target)
            left++;

        else if (sum > target)
            right--;

        else
            return [];
    }

};

console.log(twoSum(numbers, target));