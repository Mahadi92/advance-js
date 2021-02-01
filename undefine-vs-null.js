// undefine 

//1st way
let a;
console.log(a);

//2nd way 
function add(a, b) {
    console.log(a + b);
    // no return
}
const result = add(5, 10)
console.log(result);

//3rd way 
function add2(a, b) {
    console.log(a + b);
    return; // nothing return;
}
const result2 = add2(5, 10)
console.log(result2);

// 4th way 
function add3(a, b) {
    console.log(a + b);
    return;
}
const result3 = add2(5) // no value passing
console.log(result3);

// 5th way 
const person = {
    id: 2,
    name: "Mahadi Hasan",
    phone: 122556665,
}
console.log(person.roll); // wrong property want to show

// 6th way 
const arr = [19, 15, 14, 86, 6];
console.log(arr[11]); // wrong index want to show

// 7th way
const x = undefined; //not recommended