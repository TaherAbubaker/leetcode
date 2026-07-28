/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let nums = [-4,-1,-1,0,1,2];

var threeSum = function(nums) {   
    
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right){
            if ((nums[left] + nums[right]) === -nums[i]) {
            result.push([nums[i], nums[left], nums[right]]);
            left++;
            right--;
        } else if ((nums[left] + nums[right]) < -nums[i]) {
            left++;
        } else {
            right--;
        }
        }
        
    }
    return result;
};

console.log(threeSum(nums));
