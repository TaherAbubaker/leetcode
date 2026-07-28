let a = [2, 2, 2, 2];

function isItASqure(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] != a[0]) {
            return false;
        }
    }
    return true;
}

console.log(isItASqure(a));