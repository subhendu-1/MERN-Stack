// for loop:

let n = 5
for (let count = 0; count < n; count++){
    if(count == 3){
        break;
    }
    console.log(count);
}

// while:---

let i = 0;
// while(i < n){
    //    if(i == 3){
    //     continue;
    //    }
//     i++;
//     console.log("hello world ",i);
// }

// do while loop:

// do{
//     console.log("hello world ",i);
//     i++;
// }while(i < n);


// for in loop


// for(i in arr){
//     console.log(arr[i])
// }


// forEach loop:----

const a = [12,35,67,84];

// const myFunction = (element,index) =>{
//     console.log("printing ",element," index is ",index);
// }

a.sort((a,b) => {
    return a-b;
})

console.log(a);
// a.forEach(myFunction);