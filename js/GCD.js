// find the greatest common divisor

let GCD = (a, b) => {
 //return codtion ? true : false
   return b === 0 ? a : GCD(b , a % b);
};

console.log(GCD(20, 7));
