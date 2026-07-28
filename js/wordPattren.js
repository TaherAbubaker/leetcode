const { useLayoutEffect } = require("react");

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
};

let s = "dog constructor constructor dog"; 
let pattern = "abba";

let words = s.split(" ");
console.log(words);

    if (pattern.length !== words.length) {console.log("false");}

    let mapCharToWord = {};
    console.log(mapCharToWord);
    let mapWordToChar = {};
    console.log(mapWordToChar);

    for (let i = 0; i < pattern.length; i++) {
        let c = pattern[i];
        let w = words[i];
        if (mapCharToWord[c] && mapCharToWord[c] !== w) console.log("false 2");
        if (mapWordToChar[w] && mapWordToChar[w] !== c) console.log("false 3");
        
        mapCharToWord[c] = w;
        mapWordToChar[w] = c;
    }
    
    console.log("true");
    
    something(;)