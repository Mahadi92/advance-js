// defult js true false

//Number t/f
const number = 5; // true
if (number) {
    console.log("This is true.");
} else {
    console.log("This is false.");
}

const number2 = 0; // false
if (number) {
    console.log("This is true.");
} else {
    console.log("This is false.");
}


//string t/f
const name = "Mahadi"; // true
if (name) {
    console.log("This is true.");
} else {
    console.log("This is false.");
}

const name2 = ""; // false
if (name) {
    console.log("This is true.");
} else {
    console.log("This is false.");
}

// undefind thing aways false
let add; //false
if (add) {
    console.log("This is true.");
} else {
    console.log("This is false.");
}

// Null thing aways false
let Null; //false
if (Null) {
    console.log("This is true.");
} else {
    console.log("This is false.");
}

// NaN thing aways false
let NaN; //false
if (NaN) {
    console.log("This is true.");
} else {
    console.log("This is false.");
}