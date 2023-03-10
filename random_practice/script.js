const y = {
    naem:"Subhendu",
    age:22,
    hobbies:['coding','eating','cricket']
}

y.name = "Rajat";

y.isAlive = true;

// console.log(y);
// console.log(y["name"]);
// console.log(y.hobbies[2]);


// for(const key in y){
//     console.log(y[key]); 
// }


function getvehicle() {
    return {
        type:'Car',
        wheels:4
    }
}

const myvechicle1 = getvehicle();
const myvechicle2 = getvehicle();


// console.log(typeof getvehicle);
// console.log(typeof myvechicle1);

//Object Destructring ES6

console.log(y);

// when you want to change variable name

// const myAge = y.age;

// IN ES6

const {age: myAge , isAlive: myisAlive} = y;

console.log(myAge,myisAlive);


