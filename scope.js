//global scope / variable

//you can access global everywhere
function globalTesting() {
    var firstName = "Mahadi";
    lastName = "Hasan";
    var fullName = firstName + " " + lastName;
    console.log(fullName); // you can access inside function
    return fullName;
}
var result = globalTesting()
console.log(result); // you can access outside function also


//Local scope / variable

// you only can access on your scope
function globalTesting() {
    const slcFndName = "Srinath";
    let clgFndName = "Aminul"
    console.log(sclFndName, clgFndName); // you only can access inside function
    return slcFndName, clgFndName;
}
var result = globalTesting()
// console.log(sclFndName, clgFndName); // you can't do this