let a = [3,52,6,33,7,65,3,2];

function sorted(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr;
}

console.log(sorted(a));