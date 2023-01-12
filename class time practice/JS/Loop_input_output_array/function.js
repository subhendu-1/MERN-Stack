function gritting(name){
    console.log("hi ",name)
    console.log("hello ",name)
    console.log("how out you ",name)
}


gritting('subhendu');

// let git = gritting('Rajat0'); // This is give it error because it is not return any thing
// console.log(git);


function addition(a,b){
    console.log("The sum of two number ");
    return a+b;
}

const add = addition(3,5);
console.log(add);



// function expression:- in function expression you can store the all function in a one veriable

// can't access this function before intializtion

const myaddtionFun = function (a,b){
    console.log("The sum of two number ");
    return a+b;
    console.log("This is done") // this is not run because after return no one are executed

}

console.log(myaddtionFun(2,7));


// Array function :-

const mysubFun = (a,b) => {
    let result = a-b;
    return result;
}

let ans = mysubFun(8,2);
console.log(ans);