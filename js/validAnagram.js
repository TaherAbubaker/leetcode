var isAnagram = function(s, t) {
    
    s = s.split('');
    t = t.split('');

    if(s.length != t.length) return false;

    if (s.length == t.length) {
        for (let i = 0; i < s.length; i++) {
            let index = t.indexOf(s[i]);
            if (index === -1)return false;
            t.splice(index , 1);
        }
    }
    return true;
};

console.log(isAnagram("anagram" , "nagaram"));



/*
AI :
python
aligbra calculas 
ai programing - ml - dataseince
*/

/*
fullstack:
   front:-
   html - css - js

   back:-
   C# or js
   oop
   api
   more...
*/

/*
flutter:
   flutter framwork dart
*/
