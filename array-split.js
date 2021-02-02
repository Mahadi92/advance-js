// array spiting and joining element
const numbers = [5, 7, 8, 9, 6, 3, 7, 4, 1];

//split without chageing main array
const part = numbers.slice(3, 5); // Here '3' is a starting index and '5' is a ending index
console.log(part);
console.log(numbers);

//split and remove value from main array and add new value
const removed = numbers.splice(2, 5, 10, 21, 30); // Here '2' is a starting index and '4' is a how many(index) '10, 21, 30' is new array value insted of removed value.
console.log(removed);
console.log(numbers);

// Adding / Joining array 
const together = numbers.join(" M.H ")
console.log(together);