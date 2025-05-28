const address = { 
    doorNum: 125, 
    city: 'Mysuru', 
    state: 'Karnataka' 
};

// While destructuring, the names must match.
const { doorNum, city, state } = address;

console.log(doorNum);
console.log(city);
console.log(state);