// map function
const numbers = [10, 15, 5, 20, 25];

function squrare(element) {
    return element * element;
}

numbers.map(function (element) {
    console.log(element);
})

// show element and index number
numbers.map(function (element, index) {
    console.log(element, index);
})

// show full array with index and element
numbers.map(function (element, index, array) {
    console.log(element, index, array);
})

//return with array
const result = numbers.map(function (element) {
    return element * element;
})
console.log(result);

// map with array function 
const result2 = numbers.map(x => x * x);
console.log(result2);

// filter with array function 
const result3 = numbers.filter(x => x < 15);
console.log(result3);

// find with array function 
const result4 = numbers.find(x => x > 20);
console.log(result4);