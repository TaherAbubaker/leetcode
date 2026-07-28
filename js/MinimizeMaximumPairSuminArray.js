/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [3, 5, 2, 3];

var minPairSum = function(nums) {
    let sorted = nums.sort((a, b) => a - b);

    let left = 0;
    let right = sorted.length - 1;
    let maxpair = 0;

    while (left < right){
        let sum = sorted[left] + sorted[right];

        if (maxpair < sum)
            maxpair = sum;

        left  ++;
        right --;

        return maxpair

    }

};

console.log(minPairSum(nums));