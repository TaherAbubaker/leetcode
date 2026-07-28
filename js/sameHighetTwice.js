// check if two or more kids got the same highet

let hights = [1,12,3,4,44,52,5,12,53]

/*function check(hights){
    for (let i = 0; i < hights.length; i++) {
        for (let j = i+1 ; j < hights.length; j++) {
            if (hights[i] == hights[j]) {
                return true
            }
        }
    }
    return false
}
*/

/*function check(hights){
    return new Set(hights).size != hights.length
}*/

/*function check(hights) {
    let object = {}
    for (let i = 0; i < hights.length; i++) {
        if (object[hights[i]]) {
            return true
        } else {
            object[hights[i]] = true
        }
    }
    return false
}
*/
console.log(check(hights))