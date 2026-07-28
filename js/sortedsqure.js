/**
 * @param {number[]} nums
 * @return {number[]}
 */

let nums = [-4,-1,0,3,10];

var sortedSquares = function(nums) {
    return nums.map(x=>x*x).sort((a,b)=>a-b);
};

console.log(sortedSquares(nums));