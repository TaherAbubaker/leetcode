/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let nums = [0,1,0,3,12];

var moveZeroes = function(nums) {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        right++;
    }
    delete temp
    return nums
};

console.log(moveZeroes(nums));
