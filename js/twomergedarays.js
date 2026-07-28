/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    return nums1.sort((a, b) => a - b) ;
};

console.log(merge(nums1, m, nums2, n));