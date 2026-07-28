/*
Algorithm SelectionSort(A, n)
Input: Array A of n numbers
Output: Array A sorted in ascending order

1. for i ← 1 to n-1 do
2.     minIndex ← i
3.     for j ← i+1 to n do
4.         if A[j] < A[minIndex] then
5.             minIndex ← j
6.     Swap A[i] and A[minIndex]
7. return A
 */

let A = [12, 7, 9, 3, 15]
let swaps = 0

for (let i = 0; i < A.length; i++) {
    let minindex = i
    for (let j = i + 1; j < A.length; j++) {
        if(A[j] < A[minindex]){
        minindex = j
        ++swaps
    }
    }
    // if a swap is needed
    if (minindex !== i) {
        let temp = A[i]
        A[i] = A[minindex]
        A[minindex] = temp
    }
}

console.log(A)
console.log(swaps)


/* 
let A = [12, 7, 9, 3, 15]
let swaps = 0

for (let i = 0; i < A.length - 1; i++) { // no need to go to last element
    let minindex = i
    for (let j = i + 1; j < A.length; j++) {
        if (A[j] < A[minindex]) {
            minindex = j
        }
    }
    if (minindex !== i) { // only swap if needed
        let temp = A[i]
        A[i] = A[minindex]
        A[minindex] = temp
        swaps++
    }
}

console.log(A)       // ✅ [3, 7, 9, 12, 15]
console.log(swaps)   // ✅ number of swaps
*/


/*
pseudocode:

for i = 0 to i less than n (size of array)
minindex = i
for j = i + 1 to j less than n (size of array)
if A[j] < A[minindex]
minindex = j

swap A[i] and A[minindex]

*/