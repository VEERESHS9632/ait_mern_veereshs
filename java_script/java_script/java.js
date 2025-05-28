let numbers = [10, 20, 30, 10, 10, 30];
let freq = [[10, 3], [20, 1], [30, 2]];

for (let e of numbers) {
    console.log(e);
}

// Fixed reference to undefined variable `eAr`
for (let e of numbers) {
    console.log(e); // Assuming you meant to print `e`
}

// Fixed template literal syntax and corrected variable naming
for (let [theNum, itsFreq] of freq) {
    console.log(`${theNum} occurs ${itsFreq} times`);
}