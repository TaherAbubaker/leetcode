/**
 * @param {number[]} height
 * @return {number}
 */

//height = [1,8,6,2,5,4,8,3,7]

var maxArea = function(height) {
   let left    = 0;
   let right   = height.length - 1;
   let maxarea = 0;

   while (left < right){
    let area = ((right - left)*(Math.min(height[left], height[right])));
    maxarea = Math.max(maxarea, area);

    if (height[left] < height[right]) {
        left++
    }
    else {
        right--
    }
   }
   return maxarea;
};