let array = [2, 4, 7, 34, 5, 67, 3, 5];


//my algorithm O(n log n)
//Faster for large arrays, but modifies array with sort but we dont need the array we are just checking if its uunique or not
function unique1(array) {
    let newarray = array.sort((a, b) => a - b);
    for (let i = 0; i < newarray.length - 1; i++)
        if (newarray[i] === newarray[i + 1]) return true;
    return false;
}



//book algorithm O(n²)
//Slower for large arrays, but keeps original array intact
function unique2(array) {
    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            if (array[i] === array[j]) return true;
        }
    }
    return false
}