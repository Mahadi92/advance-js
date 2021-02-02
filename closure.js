// Closure
function projectCount() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const mahadisProject = projectCount();
console.log(mahadisProject());
console.log(mahadisProject());
console.log(mahadisProject());
console.log(mahadisProject());
console.log(mahadisProject());

const ninjasProject = projectCount();
console.log(ninjasProject());
console.log(ninjasProject());
console.log(ninjasProject());

console.log(mahadisProject());
console.log(mahadisProject());