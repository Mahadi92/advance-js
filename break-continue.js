// break => stop code.
//continue => skip code.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const number2 = [1, -2, 3, -4, -5, 6, -7, 8, -9];

//break 
for (let i = 0; i < number.length; i++) {
    if (number[i] > 4) {
        break;
    }
    console.log(number[i]);

}
//continue 
for (let i = 0; i < number.length; i++) {
    if (number2[i] < 0) {
        continue;
    }
    console.log(number2[i]);

}