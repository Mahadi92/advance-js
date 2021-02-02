const friend = [{
    id: 12,
    name: "Sakib khan"
}, {
    id: 20,
    name: "Pornima"
}, {
    id: 33,
    name: "Sabnur"
}, {
    id: 41,
    name: "Moyori"
}, {
    id: 55,
    name: "Dipjool"
}];

// old way to creating new array from obj property
const myfriend = [];
for (let i = 0; i < friend.length; i++) {
    const element = friend[i].name;
    myfriend.push(element);
    console.log(myfriend);
}

// map / new way to creating new array from obj property
const name = friend.map(s => s.name);
console.log(name);


// filering arrey
const biggerId = friend.filter(s => s.id > 33);
console.log(biggerId);

//find array 
const biggerOneId = friend.find(s => s.id > 40);
console.log(biggerOneId);