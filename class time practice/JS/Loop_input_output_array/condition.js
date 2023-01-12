let age = 23;

if (age >= 20) {
  console.log("You can drive");
} else if (age == 20) {
  console.log("You please wait some days or you can drived");
} else {
  console.log("Youn can't drive");
}


// ternary operator

age>20 ? console.log("You can drive") : console.log("Youn can't drive");

let set = 2;
console.log("Enter the switch constaction");

switch (set) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 1:
    console.log("wednesday");
    break;
  case 1:
    console.log("thrusday");
    break;

  default:
    console.log("chill day");
    break;
}
