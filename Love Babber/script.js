console.log("Subhendu is Hear's"); 
// loosely equality and strict equality

let num = 1;
let str = '1';

console.log(num == str);  //loose equality  this is check jast value
console.log(num === str); // strict equality  this is check type and value both


// flasely and truthly

console.log(false || "Subhendu")
console.log(false || 5 || 1);  // this is happend because or short circit when first falsely value find this is not going to next values


const obj = {
    subhendu:80,
    raj:43,
    rajat:59,
    raju:38
}


// for in loop

for(let a in obj){
    console.log("mark is " + a + " is " + obj[a]);
}