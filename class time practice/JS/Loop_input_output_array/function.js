// function gritting(name){
//     console.log("hi ",name)
//     console.log("hello ",name)
//     console.log("how out you ",name)
// }


// gritting('subhendu');

// // let git = gritting('Rajat0'); // This is give it error because it is not return any thing
// // console.log(git);


// function addition(a,b){
//     console.log("The sum of two number ");
//     return a+b;
// }

// const add = addition(3,5);
// console.log(add);



// // function expression:- in function expression you can store the all function in a one veriable

// // can't access this function before intializtion

// const myaddtionFun = function (a,b){
//     console.log("The sum of two number ");
//     return a+b;
//     console.log("This is done") // this is not run because after return no one are executed

// }

// console.log(myaddtionFun(2,7));


// // Array function :-

// const mysubFun = (a,b) => {
//     let result = a-b;
//     return result;
// }

// let ans = mysubFun(8,2);
// console.log(ans);

const Ispalindrom = (a) =>{
    const len = a.length;
    
    let i = 0;
    while(i < len/2){
        if(a[i] != a[len-1-i]){
            console.log(a,"This is not a plaindrom");
        }
        
    }
    console.log(a,"This is palindrom");
}

const a = "Subhendu";
const value = Ispalindrom(a);
console.log(value);