let a = [2, 2, 2, 2];

function isItASqure(a) {
    return a.length == 4 && a[0] == a[1] && a[1] == a[2] && a[2] == a[3];
}

console.log(isItASqure(a));