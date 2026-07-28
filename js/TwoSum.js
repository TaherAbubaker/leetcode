let nums = [0,0,2,7,11,43,3] 

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                return `${i} and ${j}`;
            }
        }
    }
};

twoSum(nums , 9);